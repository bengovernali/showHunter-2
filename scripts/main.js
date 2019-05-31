"use strict"

const eventContainer = document.getElementById('eventList');
const userInput = document.getElementById('input');
const inputForm = document.getElementById('inputForm');


inputForm.addEventListener("submit", executeSearch);


function executeSearch(e) {
    e.preventDefault();
    let child = eventContainer.lastElementChild;
    while (child) {
        eventContainer.removeChild(child);
        child = eventContainer.lastElementChild
        let loadingBar = document.querySelector('.loading');
        loadingBar.classList.add('loading-hide');
    } 

    let userArtist = userInput.value;
    document.querySelector('#scroll').scrollIntoView({
        behavior: 'smooth'
    });
    getArtistId(userArtist);
};

