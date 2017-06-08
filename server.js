//'express' is the name of the Module
var express = require('express');

//Create our app
var app = express();

//Which folder to serve? then start the server
//- 'public' is the folder name we want to expose to the express server
app.use(express.static('public'));

//Start the Server, give a port and a function to get called when server is up 
app.listen(3000, function(){
    console.log('express server in up on port 3000')
})