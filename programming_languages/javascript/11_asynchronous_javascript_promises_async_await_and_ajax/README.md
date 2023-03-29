# Asynchronous JavaScript: Promises, Async/Await and AJAX

## Table of contents
* [Asynchronous JavaScript, AJAX and APIs](#asynchronous-javascript-ajax-and-apis)
* [AJAX CAll: XMLHttpRequest](#ajax-call--xmlhttprequest)
* [Callback Hell](#callback-hell)

## Asynchronous JavaScript, AJAX and APIs
* Synchronous:
  * most code is synchronous
  * synchronous code is executed line by line
  * each line of code waits for previous line to finish
  * long-running operations block code execution
* Asynchronous:
  * asynchronous code is executed after a task that runs in the "background" finishes
  * asynchronous code is non-blocking
  * execution doesn't wait for an asynchronous task to finish its work
* AJAX:
  * Asynchronous JavaScript And XML: Allows us to communicate with remote web servers in an asynchronous way.
  * request data from web servers dynamically
* API:
  * Application Programming Interface
  * allows applications to talk to each other

## AJAX Call: XMLHttpRequest
* XMLHttpRequest is the old way
```
const request = new XMLHttpRequest();
// type of request and url
request.open('GET', 'https://restcountries.com/v3.1/name/canada');
// send request and fetches the data in the background. And then triggers the load event.
request.send();

request.addEventListener('load', function() {
  // The this keyword is the request object
  const [data] = JSON.parse(this.responseText); // destructure the response to get an object instead of array
  console.log(data); // Object { name: {...}, tld: ..... }
});
```

## Callback Hell
* callbacks inside callbacks inside callbacks ...
* when we have a lot of nested callbacks in order to execute asynchronous tasks in sequence
* in ES6 we can use promises to escape callback hell
```
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/canada');
request.send();

request.addEventListener('load', function() {
  const [data] = JSON.parse(this.responseText); // destructure the response to get an object instead of array
  const neighbour = data.borders?.[0];
  
  if (!neighbour) return;
  
  // Get neighbour by code
  const request2 = new XMLHttpRequest();
  request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
  request2.send();
  request2.addEventListener('load', function() {
    const [data2] = JSON.parse(this.responseText);
    console.log(data2.name); // Object { common: "United States", official: "United States of America", ... }
  });
});
```