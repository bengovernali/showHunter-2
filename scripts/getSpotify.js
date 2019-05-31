"use strict"

async function getSpotify(url) {
    try {
        let response = await fetch(url, {
            headers: {
                'Authorization': 'Authorization: Bearer BQAk9JEwgtpDGNfxvtJeE9YLnEERxDqr480TUE2if9i1o9yBN_5OqJtvJylqVSSUx6K9VZcGQVoyd0KiuhTKekSTcsFvWmFpAAAkq5a9ykHfSatbfX2Cp-Gr80-wOMQ4I6J6z2xYH7-F6NH1O6i4wNsO'
            }});
        let json = await response.json();
        console.log(json);
        return json;
    } catch(err) {
        return err.message;
    }
};