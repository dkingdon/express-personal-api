# Project Name
### Personal API

# Goals
* Well-documented JSON API Endpoints
* A full set of REST-ful Routes (GET, POST, UPDATE, DELETE)
* At least one CRUD-able resource (Create, Read, Update, Destroy)
* An /api/profile endpoint with some basic details about developer

## Technologies
* Web Hosting @ Heroku.com
* HTML, CSS, javascript, jQuery 2.2.2 CDN, Boostrap 3.3.6 CDN, Handlebars 4.0.5 CDN, Express, MongoDB

## Missed Goals
* Couldn't get Update to work in the form of updating ratings.
* Search feature not working
* Formatting for frame creation is not very visually pleasing
* Stretch: Wanted to have the create form hidden until a "create" button was pressed, then present the form  
* Stretch: Wanted to have the "Travel" section only appear if the frame was a softail
* Stretch: Wanted to add Star graphic to rating and allow user to selects stars, have the page update with total rating
* Stretch: Wanted to have the images enlarge in it's own pop up / on screen window when selected for a more detailed view of the frame

## API Documentation

| Field Name   | Path         | Description                    |
| ------------ |:------------:| ------------------------------:|
| GET          | '/'          | Displays index.html on homepage |
| GET          | '/api'       | Redirects to full outline of api routs and descriptions |
| GET          | '/api/profile'| Redirects to page outlining information about the developer |
