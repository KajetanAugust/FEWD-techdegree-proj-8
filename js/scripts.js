
const cardsDiv = document.getElementById('employees');


const characters = fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    // .then(data => console.log(data))
    .catch( error => console.log('Looks like there was a problem', error));

let bigNames = characters.map(character => character.name.toUpperCase());

console.log(bigNames);