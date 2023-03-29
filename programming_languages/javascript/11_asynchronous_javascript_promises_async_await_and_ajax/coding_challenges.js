'use strict';

// Coding Challenge #1
console.log('CODING CHALLENGE #1');
const whereAmi = function(lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=API_KEY_REQUIRED`)
    .then(response => {
        if (!response.ok) throw new Error(`Something went wrong ${response.status}`);

        return response.json();
    })
    .then(result => {
        console.log(`You are in ${result.city}, ${result.country}`);

        return fetch(`https://restcountries.com/v3.1/name/${result.country}`);
    })
    .then(response => {
        if (!response.ok) throw new Error(`Something went wrong ${response.status}`);

        return response.json();
    })
    .then(result => console.log(result[0]))
    .catch(err => console.error(err.message));
}

//whereAmi(52.508, 13.381);
//setTimeout(() => whereAmi(19.037, 72.873), 1000);
//setTimeout(() => whereAmi(-33.933, 18.474), 2000);