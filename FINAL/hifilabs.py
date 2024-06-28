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
    print(response.html.html)
    products = response.html.xpath('//div[@class="sc-9be8bed7-2 eeAKPq"]')
    return products

def main():
    url = 'https://hifilabs.co/'
    try:
        session = create_session()
        products = fetch_html(session, url)
        # Debug: Check what is returned by the XPath query
        print(f"Products found: {products}")
        for product in products:
            print(product.text)
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
