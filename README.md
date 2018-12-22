# moviedb-search-broker-node
 REST service broker to search movies from The Movie Database (TMDb) API. Service is implemented using Node, Express and TypeScript. You can refer to .NET implementation @ (https://github.com/gathindra/MovieDBSearchBroker).


* The Movie DB search API -- https://developers.themoviedb.org/3/search/search-movies

## Dependencies

* Node 10.13.0 (8.x or later should work)
* Express 4.16.4

## Web front-end
You can get the code from  - https://github.com/gathindra/movie-search-web-app

# How to run the service
* Open 2 terminals @ project root
* npm run watch-ts (Terminal 1)
* nmp run watch-node (Terminal 2)

* Service starts @ http://localhost:5000
* http://localhost:5000/api/v1/movies?query=star%20wars&page=1
