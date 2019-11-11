import express from "express";
import request from "request";

const app= express.Application = express();
const port = 3000;
const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const LATEST_DATA_QUERY = {
  query: "db.getCollection('Catalog').find({})"
};

var db
var collection1
var collection2
var MongoClient = require('mongodb').MongoClient;
//mongo.connect(url, {
 //   useNewUrlParser: true,
 //   useUnifiedTopology: true
//  }, (err, client) => {

 // if (err) {
 //   console.error(err)
 //   return
 // }
//  else{
//    db = client.db('Protect-The-Dough')
//    collection1 = db.collection('Catalog')
//    collection2 = db.collection('Users')
//    console.log("CONNECTED");
   
//  }
  //...
//})
var dbo 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  dbo = db.db("Protect-The-Dough");
});

function handleLatestData(req, res) {
  request.post(url, (error, _response, body) => {
    if (body) {
      let str = JSON.stringify(body);
      let jsonResult = str.substring(1, str.length - 1);
      res.contentType("json");
      res.send(jsonResult);
    } else {
      console.log(error);
      res.sendStatus(500);
      res.send({ error: "Error connecting to database" });
    }
  }).json(LATEST_DATA_QUERY);
}

function GetCatalog(){
  dbo.collection("Catalog").find().toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}

app.get("/latestData", handleLatestData);
app.get("/", (req, res) => {
  res.send("hello world");
  
});
app.get("/Catalog", GetCatalog);
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on port ${port}`);
});
