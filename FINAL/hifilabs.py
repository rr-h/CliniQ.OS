import requests
from requests_html import HTMLSession

def get_html_from_url(url):
    session = HTMLSession()
    response = session.get(url)
    response.html.render(sleep=2, scrolldown=1)
    return response

url = 'https://hifilabs.com/'
html_response = get_html_from_url(url)
status_code = html_response.status_code
print(status_code)
