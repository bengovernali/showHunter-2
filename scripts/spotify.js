"use strict"

function getId(arr) {
    const artistId = arr.artists.items[0].id;
    return artistId;
}

async function getArtistId(artist) {
    const URL = `${proxy}https://api.spotify.com/v1/search?q=${artist}&type=artist`;
    const requestHeaders = {
        method: 'GET'
    };
    const request = new Request(URL, requestHeaders);

    let response = await getSpotify(request);
    let artistId = await getId(response);
    pullRelatedArtists(artistId);
}

function createRelatedArray(response) {
    const relatedArray = response.artists;

    console.log(relatedArray);
    //return relatedArray;
    let artistsArray = [];
    relatedArray.forEach(function(artist) {
        artistsArray.push(artist.name);
    });
    console.log(artistsArray);
    return artistsArray;
};

async function pullRelatedArtists(id) {
    const URL = `${proxy}https://api.spotify.com/v1/artists/${id}/related-artists`;
    const requestHeaders = {
        method: 'GET'
    };

    const request = new Request(URL, requestHeaders);

    let response = await getSpotify(request)
    let relatedArray = await createRelatedArray(response);
    pullEvents(relatedArray);
};


