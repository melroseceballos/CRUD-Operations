// Require the database connection & the "Vampire" Mongoose model
const db = require('./')

// Data to seed the Vampire collection
const data = [
  {
    name: 'Count Chocula',
    hairColor: 'brown',
    eyeColor: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['cereal', 'marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 2
  },
];
// Immediatley invoke an async function that will reset the data in the Vampire collection
(async function () {
  const options = { maxTimeMS: 60000 };
  await db.Vampire.deleteMany({},options)
  console.log('Removed all log entries')
  await db.Vampire.insertMany(data)
  console.log(`Added ${data.length} vampires to the database`)
  process.exit()
})().catch(err => {
  console.log('Could not seed database:\n' + err)
  process.exit()
})
