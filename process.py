import pandas as pd
import numpy as np
import re

# Load the dataset
df = pd.read_csv("buildings_401203.csv")

# Function to extract coordinates from geometry field
def extract_coordinates(geometry):
    if "POINT" in geometry:
        match = re.findall(r"[-+]?[0-9]*\.?[0-9]+", geometry)
        if match:
            return float(match[0]), float(match[1])
    elif "POLYGON" in geometry:
        match = re.findall(r"[-+]?[0-9]*\.?[0-9]+", geometry)
        if match:
            return float(match[0]), float(match[1])  # Taking first coordinate in polygon
    return None, None

# Apply function to extract latitude and longitude
df[["Longitude", "Latitude"]] = df["geometry"].apply(lambda x: pd.Series(extract_coordinates(str(x))))

# Drop rows where coordinates couldn't be extracted
df = df.dropna(subset=["Longitude", "Latitude"])

# Assign random fill levels and capacity for GWO optimization
df["Fill_Level"] = np.random.randint(10, 100, size=len(df))  # Random fill percentage (10-100)
df["Capacity"] = np.random.randint(500, 5000, size=len(df))  # Random capacity (500-5000 units)

# Select required columns for GWO
processed_df = df[["name", "Latitude", "Longitude", "Fill_Level", "Capacity"]]

# Save to CSV
processed_df.to_csv("data.csv", index=False)

print("✅ Processed dataset saved as data.csv")
