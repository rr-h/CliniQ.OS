import requests_html
from requests_html import HTMLSession

url = 'https://hifilabs.com/'
s = HTMLSession()
r = s.get(url)

r.html.render(sleep=2, scrolldown=1)

print(r.status.code)