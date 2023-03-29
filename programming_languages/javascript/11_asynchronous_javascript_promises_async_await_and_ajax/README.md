# Asynchronous JavaScript: Promises, Async/Await and AJAX

## Table of contents
* [Asynchronous JavaScript, AJAX and APIs](#asynchronous-javascript-ajax-and-apis)
* [AJAX CAll: XMLHttpRequest](#ajax-call--xmlhttprequest)

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
// sent request and fetches the data in the background. And then triggers the load event.
request.send();

request.addEventListener('load', function() {
  // The this keyword is the request object
  const [data] = JSON.parse(this.responseText); // destructure the response to get an object instead of array
  console.log(data); // Object { name: {...}, tld: ..... }
});
```