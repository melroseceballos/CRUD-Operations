/* REQUIRE THE DB CONNECTION & MODELS
---------------------------------------------------------------------- */
const db = require('./models');
const Vampire = db.Vampire


/* WRITE YOUR CODE BELOW
---------------------------------------------------------------------- */
// Vampire 1
const myVampires = [{
    name: 'Bill',
    title: 'Kill',
    hairColor: 'blonde',
    eyeColor: 'brown',
    dob: new Date(2003, 10, 1),
    loves: ['samurais','feet'],
    location: 'Lancaster, California, US',
    gender: 'f',
    victims: 66,
  },
// Vampire 2
{
    name: 'Loompa',
    title: 'Oompa',
    hairColor: 'black',
    eyeColor: 'brown',
    dob: new Date(2005, 7, 10),
    loves: ['kids','cocoa beans'],
    location: 'London, England, UK',
    gender: 'm',
    victims: 4,
  },
// Vampire 3
{
    name: 'Soju',
    title: 'Ninja',
    hairColor: 'gray',
    eyeColor: 'hazel',
    dob: new Date(2022, 10, 31),
    loves: ['fish','bells'],
    location: 'Las Vegas, Nevada, US',
    gender: 'f',
    victims: 3,
  },
// Vampire 4
{
    name: 'Torro',
    title: 'El',
    hairColor: 'neon green',
    eyeColor: 'hazel',
    dob: new Date(1998, 5, 29),
    loves: ['cows','steaks'],
    location: 'Houston, Texas, US',
    gender: 'm',
    victims: 55,
  }
]

// QUERY 1
db.Vampire.find({gender: 'f'})
// QUERY 2
db.Vampire.find({victims: {$gt: 500}})
// QUERY 3
db.Vampire.find({victims: {$lte: 150}})
// QUERY 5
db.Vampire.find({victims: {$ne: 210234}})

// PROPERTIES AND VALUES
// 1
db.Vampire.find({title: {$exists: true}})
// 2
db.Vampire.find({victims: false})
// 3
db.Vampire.find({title: {$exists: true}}, {title: {victims: false}})
// 4
db.Vampire.find({victims: true}, {victims: {$gt: 1000}})

// SELECT WITH OR
// 1
db.Vampire.find({ or: [
  {from: "New York, New York,  US"},
  {from: "New Orleans, Lousiana, US" }
]}),
// 2
db.Vampire.find({ or: [
  {loves: "brooding"},
  {loves: "being tragic"}
]}),
// 3
db.Vampire.find({or: [
 {victimes: {$gt: 1000}},
 {loves: "marshmallows"}
]}),
// 4
db.Vampire.find({or: [
  {hair: 'red'},
  {eyes: 'green'}
]}),
//  MATCH ONE OF SEVERAL VALUES
// 1
db.Vampire.find({or: [
  {loves: "frilly shirtsleeves"},
  {loves: 'frilly collars'}
]})
// 2
db.Vampire.find({loves: "brooding"})
// 3
db.Vampire.find({loves: {in: ["appearing innoncent","trickery", "lurking in rotting mansions","R&B music"]}})
// 4
db.Vampire.find({loves: "fancy cloaks", $and: [{loves: {$ne,$in: "top hats" , "virgin blood"}}]})
// NEGATIVE SELECTION
// 1
db.Vampire.find({loves: "ribbons", $and: [{eyeColor: {$ne: "brown"}}]})
// 2
db.Vampire.find({from: {$ne: "Rome"} })
// 3
db.Vampire.find({loves: {$ne: ["fancy cloaks", "frilly shirtsleeves", "appearing innocent","being tragic","brooding"]} })
// 4
db.Vampire.find({victimes: {$ne: 200}})
// REPLACE