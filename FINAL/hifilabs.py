import requests_html
from requests_html import HTMLSession

def create_session():
    """Create an HTML session."""
    return HTMLSession()

def fetch_html(session, url):
    """Fetch HTML content from a URL."""
    response = session.get(url)
    response.html.render(sleep=2, scrolldown=1)
    products = response.html.xpath('//div[@class="sc-9be8bed7-2 eeAKPq"]', first=True)    
    return response

def get_status_code(response):
    """Get the status code from the response."""
    return response.status_code

if __name__ == "__main__":
    url = 'https://hifilabs.com/'
    try:
        session = create_session()
        html_response = fetch_html(session, url)
        status_code = get_status_code(html_response)
        print(f"Status Code: {status_code}")
    except Exception as e:
        print(f"An error occurred: {e}")
