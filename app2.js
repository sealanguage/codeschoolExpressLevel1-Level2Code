//  Express Level 2 homework

var express = require('express')
// will check the node+modules folder to find node.js. is assumes this is js file because this is javascript
var app = express();

var cities = ['Altoona', 'Ligonier', 'Seward', 'Cumberland'];

app.get('/', function(request, response) {
    response.sendFile(__dirname + 'public/index.htnl');
})




app.listen(3000);


// Create a /cities route in your app.js file with at least 4 cities.
// Create an index route that refers to the following file requirement.
// Create index.html in a folder called public.
// Index.html
// Include an H1 header
// Include a form with an empty selection element
// Link up a js file.
// Create JS file for the index.html file. that will make an ajax request to /cities and display each city inside the selection element.
