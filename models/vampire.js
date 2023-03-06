// Require the Mongoose package
const mongoose = require('mongoose');

const vampireSchema = new mongoose.Schema({
  // requiring name
    name: {type:String, required: true},
    title: String,
    // Setting default hair color
    hairColor: {type: String, default: "blonde"},
    eyeColor: String,
    dob: Date,
    loves: Array,
    location: String,
    gender: String,
    // Setting minimum victim count to 1
    victims: {type: Number, min: 1}
});

// Export your schema as a Monogoose model so that it can be accessed in `models/index.js`
module.exports = mongoose.model('Vampire', vampireSchema);
