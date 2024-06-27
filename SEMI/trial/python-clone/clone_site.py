import os
import requests
from bs4 import BeautifulSoup
import undetected_chromedriver as uc
from urllib.robotparser import RobotFileParser

BASE_URL = "https://hifilabs.co"
OUTPUT_DIR = "./clone"

def download_file(url, output_path):
    try:
        response = requests.get(url)
        response.raise_for_status()
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        with open(output_path, 'wb') as f:
            f.write(response.content)
        print(f"Downloaded {url} to {output_path}")
    except requests.exceptions.RequestException as e:
        print(f"Failed to download {url}: {e}")

def crawl_and_download(url, depth=0, max_depth=2):
    rp = RobotFileParser()
    rp.set_url(f"{BASE_URL}/robots.txt")
    rp.read()
    if not rp.can_fetch("*", url):
        print(f"Crawling {url} is disallowed by robots.txt")
        return
    try:
        response = requests.get(url)
        response.raise_for_status()

        soup = BeautifulSoup(response.content, 'html.parser')

        # Download the current page
        output_path = os.path.join(OUTPUT_DIR, url.replace(BASE_URL, "").lstrip("/"))
        if not output_path.endswith(".html"):
            output_path += ".html"
        download_file(url, output_path)

        if depth < max_depth:
            # Find links to other pages and crawl them recursively
            for link in soup.find_all('a', href=True):
                href = link['href']
                if href.startswith('/') and not href.startswith('//'):
                    next_url = BASE_URL + href
                    crawl_and_download(next_url, depth + 1, max_depth)

    except requests.exceptions.RequestException as e:
        print(f"Failed to crawl {url}: {e}")

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
