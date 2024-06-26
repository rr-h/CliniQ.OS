import os
import json
import requests
from bs4 import BeautifulSoup
import undetected_chromedriver as uc
from selenium.webdriver.chrome.options import Options

BASE_URL = "https://hifilabs.co"
BUILD_MANIFEST_FILE_PATH = "./__BUILD_MANIFEST.js"
SSG_MANIFEST_FILE_PATH = "./__SSG_MANIFEST.js"
OUTPUT_DIR = "./clone"

def download_file(url, output_path):
    response = requests.get(url)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'wb') as f:
        f.write(response.content)

def parse_manifest(file_path, key):
    with open(file_path, 'r') as f:
        content = f.read()
        manifest_json = content.split(f"self.{key} = ", 1)[1].rsplit(";", 1)[0]
        return json.loads(manifest_json)

def download_resources(manifest):
    for route, files in manifest.items():
        if route in ["__rewrites", "sortedPages"]:
            continue
        for file in files:
            file_url = f"{BASE_URL}/{file}"
            output_path = os.path.join(OUTPUT_DIR, file)
            download_file(file_url, output_path)

    for rewrite in manifest['__rewrites']['afterFiles']:
        file_url = f"{BASE_URL}{rewrite['source']}"
        output_path = os.path.join(OUTPUT_DIR, rewrite['source'].lstrip('/'))
        download_file(file_url, output_path)

def download_static_files():
    os.system(f"wget --mirror --convert-links --adjust-extension --page-requisites --no-parent {BASE_URL} -P {OUTPUT_DIR}")

def capture_dynamic_content(url, output_path):
    options = uc.ChromeOptions()
    options.headless = True
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
            resource = f"{BASE_URL}/{resource.lstrip('/')}"
        output_path = os.path.join(OUTPUT_DIR, resource.split(BASE_URL)[-1].lstrip('/'))
        download_file(resource, output_path)

def main():
    build_manifest = parse_manifest(BUILD_MANIFEST_FILE_PATH, "__BUILD_MANIFEST")
    ssg_manifest = parse_manifest(SSG_MANIFEST_FILE_PATH, "__SSG_MANIFEST")

    download_resources(build_manifest)

    for route in ssg_manifest:
        route_path = route.replace('\u002F', '/')
        if route_path == '/':
            route_path = '/index.html'
        file_url = f"{BASE_URL}{route_path}"
        output_path = os.path.join(OUTPUT_DIR, route_path.lstrip('/'))
        download_file(file_url, output_path)

    download_static_files()

    dynamic_urls = [
        f"{BASE_URL}/artistlab/[slug]",
        f"{BASE_URL}/idealab/[slug]",
        f"{BASE_URL}/web3cohort/[slug]",
        f"{BASE_URL}/[windowId]"
    ]
    additional_resources = set()
    for url in dynamic_urls:
        output_path = os.path.join(OUTPUT_DIR, url.split(BASE_URL)[-1])
        capture_dynamic_content(url, output_path)
        with open(output_path, 'r') as f:
            page_source = f.read()
        additional_resources.update(extract_additional_resources(page_source))

    download_additional_resources(additional_resources)

if __name__ == "__main__":
    main()
