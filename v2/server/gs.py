from gsearch.googlesearch import search
from googleapi import google
num_page = 3
search_results = google.search("hi", num_page)

print(search_results)