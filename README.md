# Clone the repo
git clone 

## Install npm packages
npm install
ng serve
## Production Server

APP is deployed on firebase. Navigate to (https://movieflix-38467.web.app/)

## Github link
Github link https://github.com/anurag29310/movieflix
## 3rd party API's

Using movieDB API (https://developers.themoviedb.org/) for listing movies and TV shows. APIs for movies and TV shows can be found in MovieShowInitializerService.

## Multi Language App
App support two languages (English/French) for all the labels on  UI. 

## Css Library

Using bootstrap and custom CSS for the applicaiton.

## LocalStorage
Using local storage in many cases in the app to store data and retrieving.(User Reviews, watched,favorite, watch later/ PrimeMembership). Assuming it as acutal database to store and retrieve data.

## Tiles Directory
Tiles are designed in a way by placing selectors eg:(app-trending-now) anywhere in the application tile make API call and generate the list. Tiles name defines the functionality of that tile eg:(upcoming-movie) contain the list of the upcoming movie. Click on the tile it will redirect to the browse-detail page
 
 ## Content browse-detail Directory
 The browse-detail component shows the detail of the movie and show selected from the tile. This page contains functionality like watch later/favourite/watched. Click on any three-button APP will remember the change by storing it in localstorage.
 Add review to the movie by clicking review button for now storing the data in local storage.

## Content movies/TVshows directory
Reusing the tile by placing selectors in the movies/TVshows component. Tiles making the API calls and generating HTML with list of movies/TVshows

## Content myList
Watched movies, favourite and watch later marked movies and shows are listed here in the form of tiles. Fetching data from the local storage and showing the data.

## Notification Service
Using toaster to show success and fail error message

## User-Review
User can review each movie and show data will store at local sotrage.


## Routing
Using angular routing

## Things not covered
Search, Admin form, Login SignUp
