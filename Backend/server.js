import express from "express";
import request from "request";
const cors = require('cors');

const bodyParser = require('body-parser');
const assert = require('assert');
const app= express.Application = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3000;

/**
 * MongoDB Section
 */
const MongoClient = require('mongodb').MongoClient;

// Connection String
let url = '';
const user = 'pitnicky';
const password = 'protectthedough';
const authMechanism = 'SCRAM-SHA-1';

const NODE_ENV = process.env.NODE_ENV;
var corsOptions;
if (NODE_ENV !== 'production') {
    corsOptions = {
        origin: false
    };
    app.use(cors(corsOptions));
    // url = 'mongodb://localhost:27017';
    url = `mongodb://${user}:${password}@db.protectthedough.shop/?authMechanism=${authMechanism}&authSource=ptd`;

} else {
    url = `mongodb://${user}:${password}@db.protectthedough.shop/?authMechanism=${authMechanism}&authSource=ptd`;
    console.log(url);
    corsOptions = {
        origin: 'https://protectthedough.shop',
        optionsSuccessStatus: 200
    };
    app.use(cors(corsOptions));
}
console.log('Environment is:', NODE_ENV);
console.log('Connection string is:', url);

// Database name
const dbName = 'ptd';

// Create a new MongoClient
const client = new MongoClient(url, {native_parser: true, useUnifiedTopology: true});

/**
 * CRUD Section
 */

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/catalog", (req, res) => {
    // User connect method to connect to the Server
    client.connect(function(err) {
        assert.equal(err, null);
        var db = client.db(dbName);
        db.collection('catalog').find().toArray(function(err, docs) {
            if(typeof(docs !== undefined)) {
                res.send(docs);
            }
        });
    });
});

app.get("/users", (req, res) => {
    client.connect(function(err) {
        assert.equal(err, null);
        var db = client.db(dbName);
        db.collection('users').find().toArray(function(err, docs) {
            if(typeof(docs) !== undefined) {
                res.send(docs);
            }
        })
    })
});

app.get("/numofusers", (req, res) => {
    client.connect(function(err) {
        assert.equal(err, null);
        var db = client.db(dbName);
        db.collection('users').find().toArray(function(err, docs) {
            if(typeof(docs) !== undefined) {
                console.log(docs.length);
                res.send(docs.length.toString());
            }
        })
    })
});


app.post("/users", (req, res) => {
    client.connect(function(err) {
        var db = client.db(dbName);
        db.collection('users').insertOne(req.body, function(err, r) {
            assert.equal(null, err);
            assert.equal(1, r.insertedCount);
        });
        res.status(201).send();
    })
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on port ${port}`);
});
