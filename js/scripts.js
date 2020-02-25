
const cardsDiv = document.getElementById('employees');


const characters = [];

   charaters = fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    .then(data => console.log(data));


// let bigNames = characters.map(character => character.name.toUpperCase());
//
console.log(characters);