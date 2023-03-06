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
  }, {
    name: 'Dracula',
    dob: new Date(937, 0, 24, 13, 0),
    hairColor: 'brown',
    eyeColor: 'blue',
    loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
    location: 'Transylvania, Romania',
    gender: 'm',
    victims: 1238
  }, {
    name: 'Elizabeth Bathory ',
    dob: new Date(1560, 8, 7, 22, 10),
    hairColor: 'brown',
    eyeColor: 'brown',
    loves: ['virgin blood', 'fancy cloaks', 'frilly collars'],
    location: 'Nyírbátor, Hungary',
    gender: 'f',
    victims: 980
  }, {
    name: 'Lestat',
    dob: new Date(1760, 11, 9, 18, 44),
    hairColor: 'blonde',
    eyeColor: 'blue',
    loves: ['frilly shirtsleeves', 'frilly collars', 'lurking in   rotting mansions', 'Louis'],
    location: 'Auvergne, France',
    gender: 'm',
    victims: 324
  }, {
    name: 'Louis de Pointe du Lac',
    dob: new Date(1766, 6, 4, 2, 1),
    hairColor: 'brown',
    eyeColor: 'blue',
    loves: ['brooding', 'Claudia', 'staring longingly into the   distance'],
    location: 'New Orleans, Louisiana, US',
    gender: 'm',
    victims: 150
  }, {
    name: 'Claudia',
    dob: new Date(1793, 2, 7, 8, 30),
    hairColor: 'blonde',
    eyeColor: 'blue',
    loves: ['doll babies', 'ribbons', 'appearing innocent', '  trickery'],
    location: 'New Orleans, Louisiana, US',
    gender: 'f',
    victims: 290
  }, {
    name: 'Armand',
    dob: new Date(1481, 6, 1, 10, 42),
    hairColor: 'red',
    eyeColor: 'brown',
    loves: ['theatre', 'painting', 'velvet robes', 'being tragic'],
    location: 'Kiev, Russia',
    gender: 'm',
    victims: 1045
  }, {
    name: 'Santino',
    dob: new Date(1465, 6, 1, 10, 42),
    hairColor: 'brown',
    eyeColor: 'brown',
    loves: ['trickery', 'vampiric cults', 'fancy cloaks'],
    location: 'Rome, Italy',
    gender: 'm',
    victims: 1103
  }, {
    name: 'Akasha',
    dob: new Date(-8000, 6, 1, 10, 42),
    hairColor: 'brown',
    eyeColor: 'green',
    loves: ['eating hearts', 'bathing in roses', 'elaborate   headdresses', 'R&B music'],
    location: 'Kemet, Egypt',
    gender: 'f',
    victims: 210234,
    title: 'Queen of the Damned'
  }, {
    name: 'Edward Cullen',
    dob: new Date(1901, 6, 20, 0, 57),
    hairColor: 'brown',
    eyeColor: 'brown',
    loves: ['brooding', 'diamond skin', 'calling people spider   monkeys'],
    location: 'Chicago, Illinois, US',
    gender: 'm',
  }, {
    name: 'Persephone Bourignon',
    dob: new Date(1801, 5, 17, 14, 53),
    hairColor: 'red',
    eyeColor: 'green',
    loves: ['wine', 'fancy cloaks', 'appearing innocent'],
    location: 'Paris, France',
    gender: 'f',
    victims: 450
  }, {
    name: 'René Tremblay',
    dob: new Date(1922, 2, 8, 5, 3),
    hairColor: 'brown',
    eyeColor: 'green',
    loves: ['frilly shirtsleeves', 'trickery', 'card games'],
    location: 'Bucharest, Romania',
    gender: 'm',
    victims: 134
  }, {
    name: 'Caroline Belmont',
    hairColor: 'blonde',
    eyeColor: 'brown',
    dob: new Date(1799, 4, 21, 16, 15),
    loves: ['marshmallows', 'ribbons', 'being tragic'],
    location: 'Ljubljana, Slovenia',
    gender: 'f',
    victims: 567
  }, {
    name: 'Francis Frost',
    hairColor: 'black',
    eyeColor: 'blue',
    dob: new Date(1976, 6, 18, 18, 18),
    loves: ['brooding', 'frilly shirtsleeves'],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 112
  }, {
    name: 'Barnabas Spenser',
    hairColor: 'brown',
    eyeColor: 'brown',
    dob: new Date(1984, 6, 3, 13, 12),
    loves: ['being merry', 'being insane', 'card games'],
    location: 'New York, New York, US',
    gender: 'm',
    title: 'Osiris of Sewer Rats'
  }
];

// // Immediatley invoke an async function that will reset the data in the Vampire collection
(async function () {
  await db.Vampire.deleteMany({})
  console.log('Removed all log entries')
  await db.Vampire.insertMany(data)
  console.log(`Added ${data.length} vampires to the database`)
  process.exit()
})().catch(err => {
  console.log('Could not seed database:\n' + err)
  process.exit()
})