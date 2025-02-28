import osmnx as ox
import geopandas as gpd
import pandas as pd

# Define bounding box as (west, south, east, north)
bbox = (72.80, 19.36, 72.86, 19.42)  # Approximate bounds for 401203

# Fetch all buildings within the bounding box
print("Fetching building data from OpenStreetMap...")
buildings = ox.features_from_bbox(*bbox, tags={"building": True})

# Keep relevant columns
buildings = buildings[["name", "geometry"]]
buildings["name"] = buildings["name"].fillna("Unknown")

# Filter out POINT geometries (keep only polygons)
buildings = buildings[buildings.geometry.type.isin(["Polygon", "MultiPolygon"])]

# Save to CSV & GeoJSON
buildings.to_csv("buildings_401203.csv", index=False)
buildings.to_file("buildings_401203.geojson", driver="GeoJSON")

print("✅ Data saved as CSV & GeoJSON successfully!")
print(buildings.head())  # Preview
