// Require the Mongoose package & your environment configuration
const mongoose = require('mongoose');
require('dotenv').config()
const mongodbUri = process.env.MONGODBURI;

(async function () {
    await mongoose.connect(mongodbUri);
    console.log('Connected to', mongodbUri);
})().catch(err => console.log('MongoDB Connection error:\n' + err))


module.exports = {
    Vampire: require('./vampire')
}