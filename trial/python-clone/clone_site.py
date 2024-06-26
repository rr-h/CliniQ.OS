import os
import requests
from bs4 import BeautifulSoup
import undetected_chromedriver as uc

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

def capture_dynamic_content(url, output_path):
    options = uc.ChromeOptions()
    options.headless = True
    driver = uc.Chrome(options=options)
    driver.get(url)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w') as f:
        f.write(driver.page_source)
    driver.quit()

def main():
    # URLs to capture
    dynamic_urls = [
        f'{BASE_URL}',
        f'{BASE_URL}/artistlab/[slug]',
        f'{BASE_URL}/idealab/[slug]',
        f'{BASE_URL}/web3cohort/[slug]',
        f'{BASE_URL}/[windowId]'
    ]
    for url in dynamic_urls:
        output_path = os.path.join(OUTPUT_DIR, url.replace(BASE_URL, "").lstrip("/"))
        if not output_path.endswith(".html"):
            output_path += ".html"
        capture_dynamic_content(url, output_path)
        print(f"Captured dynamic content from {url}")

if __name__ == "__main__":
    main()
