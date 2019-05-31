function getSpotify(URL) {
    return fetch(URL, {
        headers: {
            'Authorization': 'Authorization: Bearer BQCWzCUJdQFUw_MytUVwDG4nnfIElvu8WfW1UtIAYfYayMAc3a7KSSLeKgwNY-Towu-nv92qaZiE01dA5QJQ-oMTikSBzXszf1zvtpZuZFBoYENoQKcot7HYEbyJ2U2rbV07wAfBQG2_ci3LdEZN5FT1'
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