const cardsDiv = document.getElementById('employees');
const searchBar = document.getElementById('searchBar');
const searchPersons = document.getElementsByClassName('name');
const userCards = document.getElementsByClassName('user');
let users;

///////////////
//// FETCH ////
///////////////

fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(res => res.json())
    .then(data => {
        users = (Object.values(data));
        creatingUser(Object.values(data));
    });

////////////////////////////
//// CREATING USER DIVs ////
////////////////////////////

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
        userDiv.classList.add(`${person.name.first}`);
        userDiv.classList.add(`${person.name.last}`);
    });
}

//////////////////////////////
//// SEARCH FUNCTIONALITY ////
//////////////////////////////

searchBar.addEventListener('keyup', ()=>{
    const searchVal = searchBar.value.toLowerCase();

    for(i=0; i<searchPersons.length; i++){
        const persons = searchPersons[i].textContent.toLowerCase();
        if(persons.includes(searchVal) != true){
            searchPersons[i].parentNode.parentNode.style.display = 'none';
        }else {
            searchPersons[i].parentNode.parentNode.style.display = '';
        }
    }
});