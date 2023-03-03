// Require the Mongoose package
const mongoose = require('mongoose');

const vampireSchema = new mongoose.Schema({
  // add your code here to set up your schema
});

// Export your schema as a Monogoose model so that it can be accessed in `models/index.js`
module.exports = mongoose.model('Vampire', vampireSchema);
