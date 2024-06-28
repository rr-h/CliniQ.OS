from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

def fetch_html_selenium(url):
    """Fetch HTML content from a URL using Selenium and extract product information."""
    options = Options()
    options.binary_location = '/usr/bin/chromium'  # Path to Chromium binary
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    
    # Explicitly specify the path to chromedriver
    service = Service('/usr/bin/chromedriver')
    driver = webdriver.Chrome(service=service, options=options)
    
    driver.get(url)
    
    # Wait for elements to load
    driver.implicitly_wait(10)
    
    products = driver.find_elements(By.XPATH, '//div[contains(@class, "sc-8d074581-2")]')
    for product in products:
        print(product.text)
    
    driver.quit()

def main():
    url = 'https://hifilabs.co/'
    try:
        fetch_html_selenium(url)
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
