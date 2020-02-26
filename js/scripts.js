const cardsDiv = document.getElementById('employees');

let users;

fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(res => res.json())
    .then(data => {
        users = (Object.values(data));
        creatingUser(Object.values(data));
    });


function creatingUser(data) {
    data[0].map(person => {
        const userDiv = document.createElement('div');
        cardsDiv.appendChild(userDiv);
        userDiv.innerHTML = `

        <div class="photo">
        <img src=${person.picture.large} alt="profile picture">
        </div>
        
        <div class="info">
        <h3 class="name">${person.name.first} ${person.name.last}</h3>
        <p class="email">${person.email}</p>
        <p class="city">${person.location.city}</p>
        </div>
        `;
        userDiv.className = 'user';
    });
}
