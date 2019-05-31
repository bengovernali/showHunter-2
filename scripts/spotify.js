

function getArtistId(artist) {
    const URL = `${proxy}https://api.spotify.com/v1/search?q=${artist}&type=artist`;
    const requestHeaders = {
        method: 'GET'
    };

    const request = new Request(URL, requestHeaders);

    getSpotify(request)
    .then(response => {
        const artistId = response.artists.items[0].id;
        return artistId;
    })
    .then(pullRelatedArtists)
}

function pullRelatedArtists(id) {
    const URL = `${proxy}https://api.spotify.com/v1/artists/${id}/related-artists`;
    const requestHeaders = {
        method: 'GET'
    };

    const request = new Request(URL, requestHeaders);

    getSpotify(request)
    .then(response => {
        const relatedArray = response.artists;

        console.log(relatedArray);
        //return relatedArray;
        let artistsArray = [];
        relatedArray.forEach(function(artist) {
            artistsArray.push(artist.name);
        });
        console.log(artistsArray);
        return artistsArray;
    })
    .then(pullEvents)
};

