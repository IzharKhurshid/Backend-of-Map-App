const mongoose = require('mongoose');

const favoritePlacesSchema = new mongoose.Schema({
  user: { type: String, required: true },

  locations: [
    {
      lng: { type: Number, required: true },
      lat: { type: Number, required: true },
      images: [{type : String}],
      savedAt: { type: Date, default: Date.now },
    }
  ],

});

module.exports = mongoose.model('FavoritePlace', favoritePlacesSchema);
