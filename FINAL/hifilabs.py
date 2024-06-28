import requests_html
from requests_html import HTMLSession

def create_session():
    """Create an HTML session."""
    return HTMLSession()

def fetch_html(session, url):
    """Fetch HTML content from a URL and extract product information."""
    response = session.get(url)
    response.html.render(sleep=2, scrolldown=1)
    
    # Debug: Print the full HTML to check if the content is loaded correctly
    html_content = response.html.html
    
    # Check for different parts of the structure
    products_by_class = response.html.xpath('//div[contains(@class, "sc-8d074581-2")]')
    products_by_image = response.html.xpath('//img[contains(@src, "cdn.hifilabs.co")]')
    
    return products_by_class, products_by_image, html_content

def main():
    url = 'https://hifilabs.co/'
    try:
        session = create_session()
        products_by_class, products_by_image, html_content = fetch_html(session, url)
        
        # Debug: Check what is returned by the XPath queries
        print(f"Products by class found: {len(products_by_class)}")
        for product in products_by_class:
            print(product.text)
        
        print(f"Products by image found: {len(products_by_image)}")
        for product in products_by_image:
            print(product.attrs.get('src', 'No src attribute'))
        
        # Optionally save the HTML content to a file for inspection
        with open("full_page.html", "w", encoding="utf-8") as file:
            file.write(html_content)
        
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
