const cardsDiv = document.getElementById('employees');
const searchBar = document.getElementById('searchBar');
const searchPersons = document.getElementsByClassName('name');
const userCards = document.getElementsByClassName('user');
const modalWindow = document.getElementById('modal');
const modalBackground = document.getElementById('modal-background');


let users;

let selectedUserIndex;

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
    data[0].map((person, index) => {
        const userDiv = document.createElement('div');
        cardsDiv.appendChild(userDiv);
        userDiv.innerHTML = `

        <div class="${index} photo">
        <img class =${index} src=${person.picture.large} alt="profile picture">
        </div>
        
        <div class="${index} info">
        <h3 class="${index} name">${person.name.first} ${person.name.last}</h3>
        <p class="${index} email">${person.email}</p>
        <p class="${index} city">${person.location.city}</p>
        </div>
        `;
        userDiv.className = index + ' user';

    });
}

////////////////////////
//// CREATING MODAL ////
////////////////////////

function creatingModal() {

    modalWindow.innerHTML = `

        <p id="closing-modal">x</p>
        <img src="icons/arrow.svg" id="modal-arrow-right" class="arrow modal-arrow-right" alt="arrow" width="40" height="40">
        <img src="icons/arrow.svg" id="modal-arrow-left" class="arrow modal-arrow-left" alt="arrow" width="40" height="40">

        <div class="modal-photo">
        <img class = "modal-img" src=${users[0][selectedUserIndex].picture.large} alt="profile picture">
        </div>

        <div class="modal-info">
        <h3 class="modal-name">${users[0][selectedUserIndex].name.first} ${users[0][selectedUserIndex].name.last}</h3>
        <p class="modal-email">${users[0][selectedUserIndex].email}</p>
        <p class="modal-city">${users[0][selectedUserIndex].location.city}</p>
        </div>

        <div class="modal-additional-info">
        <p class="modal-phone">${users[0][selectedUserIndex].cell}</p>
        <p class="modal-adress">${users[0][selectedUserIndex].location.street.number} ${users[0][selectedUserIndex].location.street.name}, ${users[0][selectedUserIndex].location.state} ${users[0][selectedUserIndex].location.postcode}</p>
        <p class="modal-birthday">Birthday: ${users[0][selectedUserIndex].dob.date.substr(8, 2)}/${users[0][selectedUserIndex].dob.date.substr(5, 2)}/${users[0][selectedUserIndex].dob.date.substr(0, 4)}</p>
        </div>
        `;

    switchingUsers();
}

//////////////////////////////
//// SEARCH FUNCTIONALITY ////
//////////////////////////////

searchBar.addEventListener('keyup', () => {
    const searchVal = searchBar.value.toLowerCase();

    for (i = 0; i < searchPersons.length; i++) {
        const persons = searchPersons[i].textContent.toLowerCase();
        if (persons.includes(searchVal) !== true) {
            searchPersons[i].parentNode.parentNode.style.display = 'none';
        } else {
            searchPersons[i].parentNode.parentNode.style.display = '';
        }
    }
});

//////////////////////////////
//// MODAL FUNCTIONALITY /////
//////////////////////////////

cardsDiv.addEventListener('click', (e) => {
    modalWindow.style.display = 'flex';
    modalWindow.classList.add('visible');
    modalBackground.style.display = 'initial';
    modalBackground.classList.add('visible');
    const selected = e.target;
    selectedUserIndex = parseInt(selected.getAttribute('class').substr(0,2));
    creatingModal();
    closingModal();
    console.log(selectedUserIndex);

});

function closingModal() {
    let modalClosingX = document.getElementById('closing-modal');
    modalClosingX.addEventListener('click', () => {
        modalWindow.style.display = 'none';
        modalWindow.classList.remove('visible');
        modalBackground.style.display = 'none';
        modalBackground.classList.remove('visible');
        selectedUserIndex = "";
    });
}

function switchingUsers() {
    const modalArrowRight = document.getElementById('modal-arrow-right');
    const modalArrowLeft = document.getElementById('modal-arrow-left');

    modalArrowRight.addEventListener('click', () => {
        if (selectedUserIndex < users[0].length - 1) {
            selectedUserIndex++;
        } else {
            selectedUserIndex = 0;
        }
        console.log(selectedUserIndex);

        creatingModal();
        closingModal();
    });

    modalArrowLeft.addEventListener('click', () => {
        if (selectedUserIndex != 0) {
            selectedUserIndex--;
        } else {
            selectedUserIndex = 11;
        }
        console.log(selectedUserIndex);

        creatingModal();
        closingModal();
    });
}