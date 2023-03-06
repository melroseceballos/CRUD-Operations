// Require the Mongoose package
const mongoose = require('mongoose');

const vampireSchema = new mongoose.Schema({
  // requiring name
    name: {type:String, required: true},
    title: "Kill",
    // Setting default hair color
    hairColor: {type: String, default: "blonde"},
    eyeColor: 'purple',
    dob: new Date (1971, 2, 13, 7, 47),
    loves: ['little kids','bikes'],
    location: "Salem, Massachusetts, US ",
    gender: 'non-binary',
    // Setting minimum victim count to 1
    victims: {type: Number, min: 1}
});

// Export your schema as a Monogoose model so that it can be accessed in `models/index.js`
module.exports = mongoose.model('Vampire', vampireSchema);
