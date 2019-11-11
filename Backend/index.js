const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
  //...
})

const db = client.db('Protect-The-Dough')
const collection1 = db.collection('Catalog')
const collection2 = db.collection('Users')
console.log("yess!!!");

