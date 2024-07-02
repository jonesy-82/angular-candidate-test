# Candidate Notes
I can't seem to get a successful response from the API. It works fine from Swagger but I attempt through my app I get the following:
 
Access to XMLHttpRequest at 'https://ntrs.nasa.gov/api/citations/search' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
 
I went ahead and created a plugged response with one record in it just to work through everything else. Most of the code to wire up to the API is there...I just have it currently wired to inject that plugged response for now.

I created some quick Home and About pages just to provide the overall look/feel of an app. I also attemped to implement an AG Grid but I couldn't seem to get the 
common/free version to run so I went with a bootstrap table. AG Grid would be a significant improvement since it has built-in filtering/paging/sorting.