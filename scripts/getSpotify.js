function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQAk9JEwgtpDGNfxvtJeE9YLnEERxDqr480TUE2if9i1o9yBN_5OqJtvJylqVSSUx6K9VZcGQVoyd0KiuhTKekSTcsFvWmFpAAAkq5a9ykHfSatbfX2Cp-Gr80-wOMQ4I6J6z2xYH7-F6NH1O6i4wNsO'
        }})
            .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            return data;
        })
        .catch(function(error) {
            return error;
        })
    };