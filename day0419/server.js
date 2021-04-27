var http= require("http");
var express = require("express");
var static = require("serve-static");

var app = express();
app.use(static(__dirname_+"/static"));

app.get("/client", function(req,res){
    res.render("");
});

var server = http.createServer(app);
server.listen(7777,function(){
    console.log("sever is running at 7777,,,");
});