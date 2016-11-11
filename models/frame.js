  var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var FrameSchema = new Schema({
    brand: String,
    material: String,
    suspension: Boolean,
    size: [XLarge, Large, Medium, Small],
    price: String,
  });

var Frame = mongoose.model('Frame', FrameSchema);

module.exports = Frame;
