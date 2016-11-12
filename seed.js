// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');


/* --- Inital Frame list --- */
var frame_list = [{
    name: 'Mojo 3',
    brand: 'Ibis',
    material: 'Carbon Fiber',
    suspension: true,
    travel: '140mm',
    year: '2016',
    price: '$2,999.00',
    imageURL: "http://static.jensonusa.com/images/Color-Image/Zoom/4/G00022RP.jpg?"
  },
  {
    name: 'Nomad CC Vivid',
    brand: 'Santa Cruz',
    material: 'Carbon Fiber',
    suspension: true,
    travel: '165mm',
    year: '2017',
    price: '$3,249.00',
    imageURL: "http://p.vitalmtb.com/photos/products/14393/photos/15020/s1600_Frame_2015_Nomad_Carbon_Blue.jpg?"
  },
  {
    name: 'Phoenix',
    brand: 'Pivot',
    material: 'Carbon Fiber',
    suspension: true,
    travel: '204mm',
    year: '2015',
    price: '$3,299.00',
    imageURL: "http://www.mtb-news.de/news/wp-content/uploads/2014/06/1645748-oelwxnuawo6r-large-670x400.jpg?"
  },
  {
    name: 'S-Works Enduro',
    brand: 'Specialized',
    material: 'Carbon Fiber',
    suspension: true,
    travel: '165mm',
    year: '2015',
    price: '$3,300.00',
    imageURL: "http://p.vitalmtb.com/photos/products/13416/photos/16841/s1600_Specialized_S_Works_Enduro_29_Frame_satin_gloss_carbon_dirty_white_rocket_red.jpg?"
  }
];
/* --- Deletes Frames from DB --- */
db.Frame.remove({}, function( err, frames) {
  if (err) {
    console.log('Error: ', err);
  }
   console.log('Removed all frames');
      /* --- Creates preset frame list --- */
      db.Frame.create(frame_list, function( err, savedFrames) {
        if (err) { return console.log(err); }
        console.log('created ' + frame_list.length + ' frames');
        /* --- Exits program  --- */
        process.exit();
    });
});
