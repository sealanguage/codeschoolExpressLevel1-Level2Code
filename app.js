var express = require('express')
// will check the node+modules folder to find node.js. is assumes this is js file because this is javascrips
var app = express();

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/public/index.html");
});


app.get('/', function(request, response) {
    response.write("hello world");
    response.end();
});

app.get('/name', function(request, response) {
    response.send("Elsine");
    console.log("Elsine");
    response.end();
});

app.get('/public', function(request, response) {
    response.redirect(301, '/surprise');
})

app.use(function (request, response) {
  console.log('Time:', Date.now());
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});

// app.listen(process.env.PORT);




//              Create a root route that returns “Hello World”
// Create a ‘/name’ route that returns your name
// Create a /redirect route that sends you to /surprise with a moved permanently status code
// Create a route that returns the current date. You will need to look up how to get the current date.
