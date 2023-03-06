// Require the Mongoose package
const mongoose = require('mongoose');

const vampireSchema = new mongoose.Schema({
  // add your code here to set up your schema
  name: { 
    type: String 
  },
  title: { 
    type: String 
  },
  hairColor: { 
    type: String 
  },
  eyeColor: { 
    type: String 
  },
  dob: { 
    type: Date 
  },
  loves: { 
    type: Array 
  },
  location: { 
    type: Array 
  },
  gender: { 
    type: String 
  },
  victims: { 
    type: Number 
  },
});

// Export your schema as a Monogoose model so that it can be accessed in `models/index.js`
module.exports = mongoose.model('Vampire', vampireSchema);
