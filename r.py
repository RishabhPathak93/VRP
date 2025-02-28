import pandas as pd
import numpy as np
import random

# Gray Wolf Optimization (GWO) Parameters
num_wolves = 10  # Number of search agents (vehicles)
max_iter = 100  # Number of iterations
alpha, beta, delta = None, None, None  # Alpha (best), Beta (2nd best), Delta (3rd best)

# Load dataset
def load_data(file_path):
    df = pd.read_csv(file_path)
    return df[['name', 'Latitude', 'Longitude', 'Fill_Level', 'Capacity']]

# Distance function
def euclidean_distance(p1, p2):
    return np.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2)

# Fitness function: Minimize total travel distance
def fitness(route, locations):
    total_distance = 0
    for i in range(len(route) - 1):
        total_distance += euclidean_distance(locations[route[i]], locations[route[i + 1]])
    return total_distance

# Initialize wolf positions (random routes)
def initialize_wolves(num_wolves, num_points):
    wolves = []
    for _ in range(num_wolves):
        wolves.append(random.sample(range(num_points), num_points))  # Random permutations of locations
    return wolves

# Gray Wolf Optimization Algorithm
def gwo_optimization(locations, num_wolves=10, max_iter=100):
    global alpha, beta, delta
    num_points = len(locations)
    
    wolves = initialize_wolves(num_wolves, num_points)  # Initialize random routes
    fitness_values = [fitness(w, locations) for w in wolves]

    # Identify Alpha, Beta, and Delta wolves
    sorted_indices = np.argsort(fitness_values)
    alpha, beta, delta = wolves[sorted_indices[0]], wolves[sorted_indices[1]], wolves[sorted_indices[2]]

    for iteration in range(max_iter):
        a = 2 - iteration * (2 / max_iter)  # Linearly decreasing parameter

        for i in range(num_wolves):
            wolf = wolves[i]
            new_route = []

            for j in range(len(wolf)):
                A1, A2, A3 = 2 * a * np.random.rand() - a, 2 * a * np.random.rand() - a, 2 * a * np.random.rand() - a
                C1, C2, C3 = 2 * np.random.rand(), 2 * np.random.rand(), 2 * np.random.rand()

                X1 = int(abs(alpha[j] - A1 * (C1 * (alpha[j] - wolf[j]))) % num_points)
                X2 = int(abs(beta[j] - A2 * (C2 * (beta[j] - wolf[j]))) % num_points)
                X3 = int(abs(delta[j] - A3 * (C3 * (delta[j] - wolf[j]))) % num_points)

                new_position = int((X1 + X2 + X3) / 3) % num_points  # Ensure valid index
                new_route.append(new_position)

            # Ensure all locations are present (fix duplicate issue)
            seen = set()
            new_route = [x for x in new_route if not (x in seen or seen.add(x))]
            missing = list(set(range(num_points)) - set(new_route))
            new_route.extend(missing)

            wolves[i] = new_route

        # Update Alpha, Beta, Delta
        fitness_values = [fitness(w, locations) for w in wolves]
        sorted_indices = np.argsort(fitness_values)
        alpha, beta, delta = wolves[sorted_indices[0]], wolves[sorted_indices[1]], wolves[sorted_indices[2]]

    return alpha  # Best route found

# Assign routes to vehicles (Unique locations per vehicle)
def assign_routes(df, num_vehicles=10):
    locations = df[['Latitude', 'Longitude']].values
    best_route = gwo_optimization(locations, num_wolves=num_vehicles, max_iter=100)

    # Divide best_route into unique chunks for vehicles
    chunk_size = len(best_route) // num_vehicles
    assigned_locations = set()
    routes = {i: [] for i in range(num_vehicles)}

    for i in range(num_vehicles):
        for _ in range(chunk_size):
            if best_route:
                location = best_route.pop(0)
                if location not in assigned_locations:
                    routes[i].append(location)
                    assigned_locations.add(location)

    # Distribute leftover locations
    for loc in best_route:
        for i in range(num_vehicles):
            if loc not in assigned_locations:
                routes[i].append(loc)
                assigned_locations.add(loc)
                break

    return routes

# Save output to CSV file
def save_routes_to_csv(df, routes, output_file='r.csv'):
    route_data = []
    for vehicle, route in routes.items():
        for idx in route:
            row = df.iloc[idx]
            route_data.append([vehicle + 1, row['name'], row['Latitude'], row['Longitude']])

    route_df = pd.DataFrame(route_data, columns=['Vehicle', 'Location', 'Latitude', 'Longitude'])
    route_df.to_csv(output_file, index=False)
    print(f"✅ Routes saved to {output_file}")

# Main Execution
if __name__ == "__main__":
    data_file = 'data.csv'
    df = load_data(data_file)
    routes = assign_routes(df, num_vehicles=10)
    save_routes_to_csv(df, routes)
