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