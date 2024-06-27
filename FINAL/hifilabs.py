from requests_html import HTMLSession

url = 'https://hifilabs.com/'
s = HTMLSession()
r = s.get(url)
