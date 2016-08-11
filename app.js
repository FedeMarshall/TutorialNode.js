/**
 * Created by fcanet on 11/08/2016.
 */
var express = require("express");

var app = express();
var port = 8888;

app.use(express.static("public"));
app.use(express.static("src/views"));

app.get("/", function(req, res){
    res.send("Hello, this is Dog!");
});

app.listen(port, function(error){
    console.log("Listening on port: " + port);
});
