const mongoose = require("mongoose");

const placesSchema = new mongoose.Schema({
  name: { String, require: true },
  description: { String, require: true },
  coordinates: [
    {
      lng: { Number, require: true },
      lat: { Number, require: true },
    },
  ],
  types: {String, enum:['resturant, park, school, custom '], default: 'custom'},
});


module.exports = mongoose.model('places',placesSchema)