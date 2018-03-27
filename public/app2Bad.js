//  Express Level 2 homework
/* global require */

var express = require('express');
// will check the node+modules folder to find node.js. it assumes this is js file because this is javascript
var app = express();
//var client = require('client');
//app.use(client);

app.use(express.static('public'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/cities', function(request, response) {
    var cities = ['Altoona', 'Ligonier', 'Seward', 'Cumberland'];
    response.json(cities);
});



// app.listen(3000, function() {
//     console.log('Listening on port 3000');
// });

app.listen(process.env.PORT);
console.log('Listening on port new client file');

//   ckeck  Create a /cities route in your app.js file with at least 4 cities.
//   ckeck  Create an index route that refers to the following file requirement.
//   ckeck  Create index.html in a folder called public.
// Index.html
//   ckeck  Include an H1 header
//   ckeck  Include a form with an empty selection element
//   ckeck  Link up a js file.
//   ckeck  Create JS file for the index.html file that will make an ajax request 
//   to /cities and display each city inside the selection element.
