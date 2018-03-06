//  Express Level 2 homework
/* global require request */

var express = require('express');
// will check the node+modules folder to find node.js. it assumes this is js file because this is javascript
var app = express();
var cities = {
    'Altoona': 'PA', 
    'Ligonier': 'PA', 
    'Seward': 'PA', 
    'Cumberland': 'MD', 
    'Windber': 'PA', 
    'Bedford': 'PA'
    };

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/cities/:name', function(reqeust, response) {
    var name = cities[request.params.name];
    var cities = name[0].toUpperCase() + name.slice(1).toLowerCase();
    if (!name) {
        response.status(404).json('State not found for ' + request.params.name);
    } else {
        response.json(name);
    }
});

app.get('/cities', function(request, response) {
    if(request.query.limit >= 0) {
        response.json(cities.slice(0, request.query.limit));
    } else {
        response.json(Object.keys(cities));
    }
});

app.use(express.static('public'));

// app.listen(3000, function() {
//     console.log('Listening on port 3000');
// });

app.listen(process.env.PORT, function() {
console.log('Listening on port new client file');
});


//     ok     A /cities route that will display all cities. (minimum of 5 cities)
//      The /cities route should accept a limit query that will send back:
//      The number of cities requested
//      All cities if 0 is provided or if limit query is omitted
//      return a status error if the limit is higher than the number of cities available in the list
//      Add a dynamic route to /cities. This should respond with the state that the city resides in.

//          Dynamic route should return Not Found status code if the requested city is not available.
//     ok     Make sure to also normalize the data sent in the /cities route. 
//     ok     The city sent should be sendable in any case and still find the state it’s in. ie Providence and providence should both return Rhode Island.
//     ok     Your normalizing of the data should use a middleware function.
//     ok     The /cities route should still display 
//          The other routes only need be accessed by curl currently
