import json
import os
import requests

# Base URL of the site to be cloned
BASE_URL = "https://hifilabs.co/"

# Path to the build manifest file
MANIFEST_FILE_PATH = "./__BUILD_MANIFEST.js"
SSG_MANIFEST_FILE_PATH = "./__SSG_MANIFEST.js"

# Directory to save the cloned site
OUTPUT_DIR = "./clone"

# Function to download a file
def download_file(url, output_path):
    response = requests.get(url)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'wb') as f:
        f.write(response.content)

# Parse the build manifest
with open(BUILD_MANIFEST_FILE_PATH, 'r') as f:
    content = f.read()
    manifest_json = content.split("self.__BUILD_MANIFEST = ", 1)[1].rsplit(";", 1)[0]
    build_manifest = json.loads(manifest_json)

# Parse the SSG manifest
with open(SSG_MANIFEST_FILE_PATH, 'r') as f:
    content = f.read()
    ssg_manifest = eval(content.split("new Set(", 1)[1].rsplit(")", 1)[0])

# Download each resource specified in the build manifest
for route, files in build_manifest.items():
    if route in ["__rewrites", "sortedPages"]:
        continue

    for file in files:
        file_url = f"{BASE_URL}/{file}"
        output_path = os.path.join(OUTPUT_DIR, file)
        download_file(file_url, output_path)

# Download additional files specified in __rewrites
for rewrite in build_manifest['__rewrites']['afterFiles']:
    file_url = f"{BASE_URL}{rewrite['source']}"
    output_path = os.path.join(OUTPUT_DIR, rewrite['source'].lstrip('/'))
    download_file(file_url, output_path)

# Download files for SSG routes
for route in ssg_manifest:
    route_path = route.replace('\u002F', '/')
    if route_path == '/':
        route_path = '/index.html'
    file_url = f"{BASE_URL}{route_path}"
    output_path = os.path.join(OUTPUT_DIR, route_path.lstrip('/'))
    download_file(file_url, output_path)

print("Website cloned successfully.")