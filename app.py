import streamlit as st
import pandas as pd
import folium
import openrouteservice
from streamlit_folium import folium_static

# Load CSV file
@st.cache_data
def load_data():
    return pd.read_csv("r.csv")

# Function to fetch routes in smaller batches (max 50 waypoints per batch)
def get_batched_routes(client, coordinates, batch_size=50):
    route_path = []
    
    for i in range(0, len(coordinates), batch_size - 1):
        batch = coordinates[i : i + batch_size]
        
        try:
            route = client.directions(
                coordinates=batch,
                profile="driving-car",
                format="geojson"
            )
            route_path.extend(route["features"][0]["geometry"]["coordinates"])
        except Exception as e:
            st.error(f"Error fetching route batch {i}-{i + batch_size}: {e}")
    
    return route_path

# Main Streamlit app
def main():
    st.title("🚛 Optimized Garbage Collection Routes")

    # Load data
    df = load_data()

    # Dropdown to select vehicle
    vehicles = df["Vehicle"].unique()
    selected_vehicle = st.selectbox("Select a Vehicle:", vehicles)

    # Filter data for the selected vehicle
    vehicle_data = df[df["Vehicle"] == selected_vehicle]

    # Extract coordinates (longitude first for ORS)
    coordinates = [(row["Longitude"], row["Latitude"]) for _, row in vehicle_data.iterrows()]

    # Initialize OpenRouteService client (Replace with your API key)
    client = openrouteservice.Client(key="5b3ce3597851110001cf6248969358aae2034242822c31f65c2b89ce")

    # Get batched optimized routes
    route_path = get_batched_routes(client, coordinates)

    # Create Folium map
    if route_path:
        m = folium.Map(location=[vehicle_data["Latitude"].mean(), vehicle_data["Longitude"].mean()], zoom_start=13)

        # Plot the proper road-following route
        folium.PolyLine([(lat, lon) for lon, lat in route_path], color="blue", weight=5).add_to(m)

        # Add numbered markers
        for idx, (_, row) in enumerate(vehicle_data.iterrows(), start=1):
            folium.Marker(
                location=[row["Latitude"], row["Longitude"]],
                popup=f"Location: {row['Location']}<br>Stop #{idx}",
                icon=folium.DivIcon(html=f'<div style="font-size: 14px; color: black; background: white; padding: 4px; border-radius: 5px;">{idx}</div>')
            ).add_to(m)

        # Add start and end markers
        if len(coordinates) > 1:
            start_point = (vehicle_data.iloc[0]["Latitude"], vehicle_data.iloc[0]["Longitude"])
            end_point = (vehicle_data.iloc[-1]["Latitude"], vehicle_data.iloc[-1]["Longitude"])

            folium.Marker(
                location=start_point,
                popup="Start Point",
                icon=folium.Icon(color="red", icon="play", prefix="fa")
            ).add_to(m)

            folium.Marker(
                location=end_point,
                popup="End Point",
                icon=folium.Icon(color="red", icon="flag", prefix="fa")
            ).add_to(m)

        # Show map
        folium_static(m)
    else:
        st.warning("No route found. Check API key or coordinates.")

if __name__ == "__main__":
    main()
