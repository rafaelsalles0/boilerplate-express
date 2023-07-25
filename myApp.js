let express = require('express');
let app = express();
var bodyParser = require('body-parser');
require('dotenv').config()
//console.log("Hello World")
//let path = __dirname + '/public'
//app.use(express.static('public'));
// Normal usage



app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/name", function(req, res) {
    // Handle the data in the request
    var string = req.body.first + " " + req.body.last;
    res.json({ name: string });
  });
//app.use(console.log(bodyParser.json()));


app.route("/name").get(function(req,res,next){
    var firstName = req.query.first;
    var lastName = req.query.last;
    // OR you can destructure and rename the keys
    var { first: firstName, last: lastName } = req.query;
    // Use template literals to form a formatted string
    res.json({
      name: `${firstName} ${lastName}`
    });
    next();
}).post(function(req, res){
    res.json({name: firstname +" "+ lastname})
    console.log("Entrou!")
})

app.get('/:word/echo', function(req,res,next){

    let word = req.params.word;
    //let echo = req.params.echo;
    res.json({echo: word})
})

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.json({"time": req.time})
})

app.use(function middleware(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})



app.get("/json", (req, res) => {
    //console.log(process.env.MESSAGE_STYLE)
    if(process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message": "HELLO JSON"})
    }else{
        res.json({"message": "Hello json"})
    }
    
  });





































module.exports = app;
