
const cardsDiv = document.getElementById('employees');




const characters = fetch('https://fsjs-public-api-backup.herokuapp.com/api')
    .then(res => res.json())




let bigFirst = characters.map( character => character.email.toUpperCase());
console.log(bigFirst);