var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );
// mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api"); NOTE: commented this out and replaced with the on above. Keeping it here until i know i dont need it.

module.exports.Frame = require("./frame.js.");
