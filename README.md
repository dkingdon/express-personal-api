# Project Name
### Personal API

# Goals
* Well-documented JSON API Endpoints
* A full set of REST-ful Routes (GET, POST, UPDATE, DELETE)
* At least one CRUD-able resource (Create, Read, Update, Destroy)
* An /api/profile endpoint with some basic details about developer

## Technologies
* Web Hosting @ Heroku.com
* HTML, CSS, javascript, jQuery 2.2.2 CDN, Boostrap 3.3.6 CDN, Handlebars 4.0.5 CDN, Express, Mongoose, MongoDB

## Missed Goals
* Couldn't get Update to work in the form of updating ratings
* Search feature not working
* Formatting for frame creation is not very visually pleasing
* Stretch: Wanted to have the create form hidden until a "create" button was pressed, then present the form  
* Stretch: Wanted to have the "Travel" section only appear if the frame was a softail
* Stretch: Wanted to add Star graphic to rating and allow user to selects stars, have the page update with total average accumulated rating
* Stretch: Wanted to have the images enlarge in it's own pop up / on screen window when selected for a more detailed view of the frame

## API Documentation

| Type | Path         | Description                    |
| :--------: |:------------:| :------------------------------|
| GET        | '/'          | Displays index.html on homepage |
| GET        | '/api'       | Redirects to full outline of api routs and descriptions |
| GET        | '/api/profile'| Redirects to page outlining information about the developer |
| GET        | '/api/frames' | Redirects to page containing full JSON objects of of bike frames in the db |
| POST       | '/api/frames' | Adds new frame to the db using address bar query params |
| DELETE     | 'api/frames/:id' | Delete db object of selected frame by ID |
| PUT        | TBD  | Not in working order, but designed to add new "Rating" key value pair to existing objects and display on the homepage |

## Resources
* Express - http://expressjs.com/en/api.html
* Stackoverflow - http://stackoverflow.com/
* Mozilla Developer Network - https://developer.mozilla.org
* jQuery API - http://api.jquery.com/
* Mongoosejs - http://mongoosejs.com/docs/api.html
* Boostrap - http://bootstrapdocs.com/v3.3.6/docs/css/
* Handlebars - http://handlebarsjs.com/
* Heroku set up - https://github.com/SF-WDI-LABS/shared_modules/blob/master/how-to/heroku-mean-stack-deploy.md

## Credits
* http://www.jensonusa.com/
* http://www.vitalmtb.com/
* http://www.competitivecyclist.com/
* https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet
* https://www.heroku.com/
