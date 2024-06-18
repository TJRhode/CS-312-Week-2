//calculator.js

//uses server hosting package
const express = require("express");
const bodyParser = require("body-parser");

//stores functionality of package in 'app'
const app = express();

//functionality to return form data
app.use(bodyParser.urlencoded({extended: true}));

//use local directory and calls the html we expect to find
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

//Command to allow js to accept POST method
app.post("/", function(req, res){
    //returns input from num 1.
        //req -> app.post's function
        //body -> where in html file we're reading from
        //num1 -> name parameter in input
    console.log("this is how to read a number from html: " + req.body.num1);

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;

    res.send("INPUT RECIEVED: " + result);
});

app.listen(3000, function(){
    console.log("server running on port 3000");
});