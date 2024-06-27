import os
import json
import requests
from html.parser import HTMLParser
import bs4
from bs4 import BeautifulSoup
import time
import re
import undetected_chromedriver as uc

BASE_URL = "https://hifilabs.co"
BUILD_MANIFEST_FILE_PATH = "./__BUILD_MANIFEST.js"
SSG_MANIFEST_FILE_PATH = "./__SSG_MANIFEST.js"
OUTPUT_DIR = "./clone"

def download_file(url, output_path, max_retries=3, retry_delay=2):
    try:
        response = requests.get(url)
        response.raise_for_status()
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        with open(output_path, 'wb') as f:
            f.write(response.content)
        print(f"Downloaded {url} to {output_path}")
    except requests.exceptions.RequestException as e:
        print(f"Failed to download {url}: {e}")
        
def parse_build_manifest(file_path):
    try:
        with open(file_path, 'r') as f:
            content = f.read()
            # Extract JSON object from the self-executing function
            match = re.search(r"self\.__BUILD_MANIFEST\s*=\s*\(function\(.*?\)\s*\{([\s\S]*?)\}\)\(.*?\);", content, re.MULTILINE)
            if match:
                json_str = match.group(1)
                # Convert single quotes to double quotes and remove trailing commas
                json_str = json_str.replace("'", '"').replace(",\n}", "\n}")
                return json.loads(json_str)
            else:
                raise ValueError(f"Could not find JSON in the __BUILD_MANIFEST file.")
    except (FileNotFoundError, json.JSONDecodeError, ValueError, AttributeError) as e:
        print(f"Error parsing {file_path}: {e}")
        return {}

def parse_ssg_manifest(file_path):
    try:
        with open(file_path, 'r') as f:
            content = f.read()
            # Extract the array from the Set constructor
            match = re.search(r"self\.__SSG_MANIFEST\s*=\s*new\s+Set\((\[[\s\S]*?\])\);", content)
            if match:
                json_str = match.group(1)
                json_str = json_str.replace("\\u002F", "/")
                manifest_list = json.loads(json_str)
                return set(manifest_list)
            else:
                raise ValueError(f"Could not find JSON in the __SSG_MANIFEST file.")
    except (FileNotFoundError, json.JSONDecodeError, ValueError, AttributeError) as e:
        print(f"Error parsing {file_path}: {e}")
        return set()

def download_resources(manifest):
    for route, files in manifest.items():
        if route in ["__rewrites", "sortedPages"]:
            continue
        for file in files:
            file_url = f"{BASE_URL}/{file}"
            output_path = os.path.join(OUTPUT_DIR, file)
            download_file(file_url, output_path)

    for rewrite in manifest.get('__rewrites', {}).get('afterFiles', []):
        file_url = f"{BASE_URL}{rewrite['source']}"
        output_path = os.path.join(OUTPUT_DIR, rewrite['source'].lstrip('/'))
        download_file(file_url, output_path)

def crawl_and_download(url, depth=0, max_depth=2):
    try:
        response = requests.get(url)
        response.raise_for_status()

        soup = BeautifulSoup(response.content, 'html.parser')

        # Download the current page
        output_path = os.path.join(OUTPUT_DIR, url.replace(BASE_URL, "").lstrip("/"))
        if not output_path.endswith(".html"):
            output_path += ".html"
        download_file(url, output_path)

        # Introduce a delay to be polite to the server
        time.sleep(3)

        if depth < max_depth:
            # Find links to other pages and crawl them recursively
            for link in soup.find_all('a', href=True):
                href = link['href']
                if href.startswith('/') and not href.startswith('//'):
                    next_url = BASE_URL + href
                    crawl_and_download(next_url, depth + 1, max_depth)

    except requests.exceptions.RequestException as e:
        print(f"Failed to crawl {url}: {e}")

def main():
    build_manifest = parse_build_manifest(BUILD_MANIFEST_FILE_PATH)
    ssg_manifest = parse_ssg_manifest(SSG_MANIFEST_FILE_PATH)

    if not build_manifest or not ssg_manifest:
        print("Error: Manifest files could not be parsed or are empty.")
        return

    download_resources(build_manifest)

    for route in ssg_manifest:
        route_path = route if route != '/' else '/index.html'
        file_url = f"{BASE_URL}{route_path}"
        output_path = os.path.join(OUTPUT_DIR, route_path.lstrip('/'))
        download_file(file_url, output_path)

def download_static_files():
    os.system(f'wget --mirror --convert-links --adjust-extension --page-requisites --no-parent {BASE_URL} -P {OUTPUT_DIR}')

def capture_dynamic_content(url, output_path):
    options = uc.ChromeOptions()
    options.headless = True
    options.binary_location = "/usr/bin/chromedriver"
    driver = uc.Chrome(options=options)
    driver.get(url)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w') as f:
        f.write(driver.page_source)
    driver.quit()

def extract_additional_resources(page_source):
    soup = BeautifulSoup(page_source, 'html.parser')
    resources = set()
    for tag in soup.find_all(['img', 'script', 'link']):
        if tag.name == 'img' and tag.get('src'):
            resources.add(tag['src'])
        elif tag.name == 'script' and tag.get('src'):
            resources.add(tag['src'])
        elif tag.name == 'link' and tag.get('href'):
            resources.add(tag['href'])
    return resources

def download_additional_resources(resources):
    for resource in resources:
        if not resource.startswith(('http://', 'https://')):
            resource = f'{BASE_URL}/{resource.lstrip('/')}'
        output_path = os.path.join(OUTPUT_DIR, resource.split(BASE_URL)[-1].lstrip('/'))
        download_file(resource, output_path)

def main():
    crawl_and_download(BASE_URL)
    download_static_files()

    dynamic_urls = [
        f'{BASE_URL}',
        f'{BASE_URL}/artistlab/[slug]',
        f'{BASE_URL}/idealab/[slug]',
        f'{BASE_URL}/web3cohort/[slug]',
        f'{BASE_URL}/[windowId]'
    ]
    additional_resources = set()
    for url in dynamic_urls:
        output_path = os.path.join(OUTPUT_DIR, url.replace(BASE_URL, "").lstrip("/"))
        if not output_path.endswith(".html"):
            output_path += ".html"
        capture_dynamic_content(url, output_path)
        with open(output_path, 'r') as f:
            page_source = f.read()
        additional_resources.update(extract_additional_resources(page_source))
        print(f"Captured dynamic content from {url}")
    download_additional_resources(additional_resources)

if __name__ == "__main__":
    main()

