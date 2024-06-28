from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

def fetch_html_selenium(url):
    """Fetch HTML content from a URL using Selenium and extract product information."""
    options = Options()
    options.headless = True
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    
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
