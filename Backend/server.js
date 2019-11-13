import express from "express";
import request from "request";

const cors = require('cors');

const bodyParser = require('body-parser');
const assert = require('assert');
const app = express.Application = express();
app.use(bodyParser.json());
const port = 3000;
const LATEST_DATA_QUERY = {
    query: "db.getCollection('Catalog').find({})"
};

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
    app.use(cors());
    url = 'mongodb://localhost:27017';
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
            res.send({error: "Error connecting to database"});
        }
    }).json(LATEST_DATA_QUERY);
}

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/catalog", cors(corsOptions), (req, res) => {
    // User connect method to connect to the Server
    client.connect(function (err) {
        assert.equal(err, null);
        var db = client.db(dbName);
        db.collection('catalog').find().toArray(function (err, docs) {
            if (typeof (docs !== undefined)) {
                res.send(docs);
            }
        });
    });
});

app.get("/users", cors(corsOptions), (req, res) => {
    client.connect(function (err) {
        assert.equal(err, null);
        var db = client.db(dbName);
        db.collection('users').find().toArray(function (err, docs) {
            if (typeof (docs) !== undefined) {
                res.send(docs);
            }
        })
    })
});

app.post("/users", (req, res) => {
    client.connect(function (err) {
        var db = client.db(dbName);
        db.collection('users').insertOne(req.body, function (err, r) {
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
