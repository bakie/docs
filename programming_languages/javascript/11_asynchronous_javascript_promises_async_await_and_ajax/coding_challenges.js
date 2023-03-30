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

// Coding Challenge #2
console.log('CODING CHALLENGE #2');

const imgContainer = document.querySelector('.images');
let currentImg;

const createImage = function(imgPath) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function() {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function() {
            reject(new Error('Image not found'));
        });
    });
};

const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

createImage('coding_images/black.png')
    .then(img => {
        console.log('First image is loaded');
        currentImg = img;
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('coding_images/white.png');
    })
    .then(img => {
        console.log('Second image is loaded');
        currentImg = img;
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch(err => console.error(err));