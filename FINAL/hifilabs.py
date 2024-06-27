from requests_html2 import HTMLSession

url = 'https://hifilabs.com/'
s = HTMLSession()
r = s.get(url)
