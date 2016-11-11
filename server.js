// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

var profile = {
  name: 'Dan Kingdon',
  githubLink: 'https://github.com/dkingdon',
  githubProfileImage: 'https://avatars2.githubusercontent.com/u/9341340?v=3&s=460',
  personalSiteLink: 'https://dkingdon.github.io/',
  currentCity: 'San Leandro', // is there something i can do that will update this dynamically? Maybe the router i hit when i turn on my mac?
  hobbies: [
    {name: 'Hockey', type: 'Ice', currentLevel: 'Intermediate'},
    {name: 'Mountain Biking', type: 'Downhill', currentLevel: 'Reckless'},
    {name: 'Reading', type: ['Sci-Fi', 'Fantasy', 'Urban Fantasy'], currentLevel: 'Inactive'},
    {name: 'Video Games', type: 'Action/Adventure RPGs', currentLevel: 'Inactive'}
  ]
}

/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    baseUrl: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
    ]
  })
});

app.get('/api/profile', function (req, res){
  res.json({profile}); // returns profile variable defined above
}); // Profile end point STILL needs work



/**********
 * SERVER *
 **********/



// listen on port 3000
app.listen(process.env.PORT || 3000)
//   function () {
//   console.log('Express server is up and running on http://localhost:3000/');
// });
