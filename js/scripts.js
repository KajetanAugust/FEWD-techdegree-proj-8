
const cardsDiv = document.getElementById('employees');




fetch('https://fsjs-public-api-backup.herokuapp.com/api')
    .then(res => res.json())
    .then(data  => {
        Object.values(data);
        console.log(data);
    });


