// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');


/* --- Inital Frame list --- */
var frame_list = [{
    name: 'Mojo 2',
    brand: 'Ibis',
    material: 'Carbon Fiber',
    suspension: true,
    travel: '140mm',
    year: '2016',
    price: '$2,999.00',
    imageURL: 'http://static.jensonusa.com/images/Color-Image/Zoom/4/G00022RP.jpg'
  },
  {
    name: 'Nomad CC Vivid',
    brand: 'Santa Cruz',
    material: 'Carbon Fiber',
    suspension: true,
    travel: '165mm',
    year: '2017',
    price: '$3,249.00',
    imageURL: 'http://content.backcountry.com/images/items/900/SNZ/SNZ007B/MATCAR.jpg'
  },
  {
    name: 'Phoenix',
    brand: 'Pivot',
    material: 'Carbon',
    suspension: true,
    travel: '204mm',
    year: '2015',
    price: '$3,299.00',
    imageURL: 'http://content.competitivecyclist.com/images/items/large/PIV/PIV001K/BLA.jpg'
  },
  {
    name: 'S-Works Enduro',
    brand: 'Specialized',
    material: 'Carbon Fiber',
    suspension: true,
    travel: '165mm',
    year: '2015',
    price: '$3,300.00',
    imageURL: 'http://p.vitalmtb.com/photos/products/10288/photos/8569/s780_2013_Specialized_S_Works_Enduro_Carbon_Frame.jpg?1341883254'
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
