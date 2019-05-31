"use strict"

function pullEvents(artistArray) {
    //loop through array of artists
    const interval = 250;
    let promise = Promise.resolve();
    artistArray.forEach(function(artist, index) {
        //create unique url to fetch from ticketmaster
        //fetch data from ticketmaster API for that specific artist
        promise = promise.then(function() {
            get(createUrl(artist))
            .then((response) => {
                console.log(response);
                createEvent(response);
            })
            return new Promise(function(resolve) {
                setTimeout(resolve, interval);
            });
        });
    });
};

function createUrl(item) {
    //create url from info pulled from theaudiodb
    //eventually add function to change postalCode/location and radius
    let url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${item}&city=atlanta&apikey=3FhkqehgsJxNsLTInDmAyq0Oo7Vzj5j5`;
    return url;
}

function createEvent(item) {
    //create div element for event and embed in DOM
    let name = item._embedded.events[0].name;
    let venue = item._embedded.events[0]._embedded.venues[0].name;
    let date = item._embedded.events[0].dates.start.localDate;
    let startTime = item._embedded.events[0].dates.start.localTime;
    let imageSource = item._embedded.events[0].images[0].url;

    let time = startTime.split(':');
    let hours = Number(time[0]);
    let minutes = Number(time[1]);
    let amPm = 'AM';
    
    let newTime = formatTime(hours, minutes);

    let newDate = formatDate(date);

    let eventContainer = document.getElementById('eventList');
    let event = document.createElement('div');
    event.className = "card";
    eventContainer.append(event);

    let artistImage = document.createElement('img');
    artistImage.src = imageSource;
    event.append(artistImage);
    
    let nameElement = document.createElement('h3');
    nameElement.textContent = `${name}`;
    event.append(nameElement);
    
    let venueElement = document.createElement('p');
    venueElement.textContent = `Venue: ${venue}`;
    event.append(venueElement);
    
    let dateElement = document.createElement('p');
    dateElement.textContent = `${newDate}`;
    event.append(dateElement);

    let timeElement = document.createElement('p');
    timeElement.textContent = `${newTime}`;
    event.append(timeElement); 

    let loadingBar = document.querySelector('.loading');
    loadingBar.classList.add('loading-hide')
};
