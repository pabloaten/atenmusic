require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
let bodyParser = require('body-parser');
let urlParser= require('url-parser');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
var urlShema = new mongoose.Schema({
  name: String,
});
var Person = mongoose.model('Person',urlShema);

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));


app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.use(bodyParser.urlencoded({extended: false}));
app.post("/api/shorturl", function(req, res) {
  // Handle the data in the request
  
  var string = new URL(req.body.url);
 const dns = require('dns');
 const options = {
    all:true,
}; 
  
  dns.lookup(string.host, options, (err, address, family) => {
    
   // This will display the address family and its value
  
   if(address == undefined){
    res.json({ error: 'invalid url' });
   }else{
      let persona = new Person({name: string});
   persona.save(function(err, data) {
    if (err) return console.error(err);
     res.json({original_url : string.href , short_url : data._id})
  });
   }
  });

   

   
    
  
});
app.get("/api/shorturl/:value?", function(req, res) {
  Person.findById({_id:req.params.value}, function (err, personFound) {
    if (err) return console.log(err);
    res.redirect(personFound.name)
})
})
// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
