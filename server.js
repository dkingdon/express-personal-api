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
      /* --- Calls index.html to default homepage --- */
  app.get('/', function homepage( req, res ) {
    res.sendFile(__dirname + '/views/index.html');
  });

      /* --- Calls all frame objects --- */
  app.get('/api/frames', function( req, res ) {
    db.Frame.find( function ( err, frames ){
      if (err){
        console.log('error has occured ', err);
      }
      res.json(frames);
    });
  });

  /* --- Searches for frames by manufacturer --- */
  // app.get('/api/frames/:brand', function ( req, res) {
  //   var brand = req.params.brand;
  //   db.Frame.findOne({brand: brand})
  //     .populate('#content')
  //     .exec(function ( err, data) {
  //       if (err){
  //         console.log(err);
  //       }
  //       res.json(data);
  //     })
  //   }); /NOTE: could not get this search function working.

  /* --- Creates new frame object with submit button --- */
  app.post('/api/frames', function ( req, res ) {
    var newFrame = new db.Frame({
      name: req.body.name,
      brand: req.body.brand,
      material: req.body.material,
      suspension: req.body.suspension,
      travel: req.body.travel,
      year: req.body.year,
      price: req.body.price,
      imageURL: req.body.imageURL + '?' //Adding the ? symbol on the end to ensure visibility on page
    })
    /* --- Saves new frame to db --- */
    newFrame.save(function ( err, frame ) {
      if (err) {
        console.log(err);
      }
      console.log('saved ', frame.name);
      res.json(frame);
    });
  });

  /* --- Deletes Frame from db --- */
  app.delete('/api/frames/:id', function ( req, res ) {
    console.log('frame deleted', req.params);
    var frameId = req.params.id;
    db.Frame.findOneAndRemove({ _id: frameId }, function ( err, deleteFrame ) {
      if (err){
        console.log(err);
      }
      res.json(deleteFrame);
    });
  });

  /* --- Creating and adding a frame rating --- */
        // NOTE: not working. Commenting out to get what i do have working on heroku 
  // app.post('/api/frames/:id/rating', function ( req, res ) {
  //   var frameId = req.params.id;
  //   db.Frame.findById(frameId)
  //   // .populate('frame')
  //   .exec(function ( err, foundFrame){
  //     console.log(foundFrame);
  //       if (err) {
  //         console.log(err)
  //       }
  //       else {
  //         foundFrame.rating.push(req.body);
  //         foundFrame.save();
  //         res.status(201).json(foundFrame);
  //       }
  //   })
  // });

  /* --- Profile Object JSON --- */
  var profile = {
    name: 'Dan Kingdon',
    githubLink: 'https://github.com/dkingdon',
    githubProfileImage: 'https://avatars2.githubusercontent.com/u/9341340?v=3&s=460',
    personalSiteLink: 'https://dkingdon.github.io/',
    currentCity: 'San Leandro',
    hobbies: [
      {name: 'Hockey', type: 'Ice', currentLevel: 'Intermediate'},
      {name: 'Mountain Biking', type: 'Downhill', currentLevel: 'Reckless'},
      {name: 'Reading', type: ['Sci-Fi', 'Fantasy', 'Urban Fantasy'], currentLevel: 'Inactive'},
      {name: 'Video Games', type: 'Action/Adventure RPGs', currentLevel: 'Inactive'}
    ]
  }
  /* --- Responds with profile data from the db --- */
  app.get('/api/profile', function ( req, res ){
    res.json({profile}); // returns profile variable defined above
  });


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false,
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/dkingdon/express-personal-api/blob/master/README.md",
    baseUrl: "http://daniel-kingdon.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me" }, // CHANGE ME
      {method: "POST", path: "/api/frames", description: "Adds new frame object to the DB"},
      {method: "DELETE", path: "/api/frames", despription: "Deletes the selected frame object from the DB" }
    ]
  })
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000)
