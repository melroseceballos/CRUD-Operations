// Require the Mongoose package & your environment configuration
require('dotenv').config()
const mongoose = require('mongoose');
const mongodbUri = process.env.MONGODBURI;

(async function () {
    await mongoose.connect(mongodbUri);
    console.log('Connected to', mongodbUri);
})().catch(err => console.log('MongoDB Connection error:\n' + err))


module.exports = {
    Vampire: require('./vampire')
}