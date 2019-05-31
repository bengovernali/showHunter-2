"use strict"

async function get(url) {
    console.log(url);
    try {
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        return json;
    } catch(err) {
        return err.message;
    }
};

