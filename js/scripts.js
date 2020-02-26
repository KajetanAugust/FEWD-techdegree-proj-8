
const cardsDiv = document.getElementById('employees');

let users;

fetch('https://randomuser.me/api/?results=12')
    .then(res => res.json())
    .then(data  => {
        users = (Object.values(data));
        creatingUser(Object.values(data));
    });


function creatingUser(data) {
    data[0].map(person =>{
        const userDiv = document.createElement('div');
        cardsDiv.appendChild(userDiv);
        userDiv.innerHTML = `
        <img src=${person.picture.large} alt="profile picture">
        <span>${person.name.first} ${person.name.last}</span>
        <p>${person.email}</p>
        <p>${person.location.city}</p>
        `;
        userDiv.className = 'user';
    });
}
