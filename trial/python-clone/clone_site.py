import json
import os
import requests

# Base URL of the site to be cloned
BASE_URL = "https://hifilabs.co/"

# Path to the build manifest file
MANIFEST_FILE_PATH = "./_buildManifest.js"

# Directory to save the cloned site
OUTPUT_DIR = "./"

# Read and parse the build manifest file
with open(MANIFEST_FILE_PATH, 'r') as f:
    content = f.read()
    manifest_json = content.split("self.__buildManifest = ", 1)[1].rsplit(";", 1)[0]
    manifest = json.loads(manifest_json)

# Function to download a file
def download_file(url, output_path):
    response = requests.get(url)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'wb') as f:
        f.write(response.content)

# Download each resource specified in the build manifest
for route, files in manifest.items():
    if route in ["__rewrites", "sortedPages"]:
        continue

    for file in files:
        file_url = f"{BASE_URL}/{file}"
        output_path = os.path.join(OUTPUT_DIR, file)
        download_file(file_url, output_path)

# Download additional files specified in __rewrites
for rewrite in manifest['__rewrites']['afterFiles']:
    file_url = f"{BASE_URL}{rewrite['source']}"
    output_path = os.path.join(OUTPUT_DIR, rewrite['source'].lstrip('/'))
    download_file(file_url, output_path)

print("Website cloned successfully.")
