  var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var FrameSchema = new Schema({
    brand: String,
    material: String,
    suspension: Boolean,
    size: String,
    price: String,
    image: String
  });

var Frame = mongoose.model('Frame', FrameSchema);

module.exports = Frame;
