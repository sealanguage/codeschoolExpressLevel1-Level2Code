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

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

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

app.post('/cities', parseUrlencoded, function(request,response) {
    var newCity = request.body;
    cities[newCity.name] = newCity.state
    response.status(201).json(newCity.name);
});

app.use(express.static('public'));

// app.listen(3000, function() {
//     console.log('Listening on port 3000');
// });

app.listen(process.env.PORT, function() {
console.log('Listening from app2.js');
});




        // Add the ability to add a new city to your list.
        //              City name
        //              Containing city
        //              Should confirm the city and state has values
        
        //      State should have at least two characters.
        //      City should have at least four characters
        //      Page should update to hide the city
        //      Update page to make the cities links which return the state name
        //      Add ability to remove a city
        //      City should be confirmed prior to removing it
        
        //          Response should contain the correct status code
        //          Page should update with new info
        
        // Additional challenge
        // Add additional information to the site:
        //              Add the additional data points longitude and latitude
        //              Clickable link should display google maps centered to the longitude and latitude in new tab
        //              Form should confirm that lat lon are numbers.
