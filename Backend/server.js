import express from "express";
import request from "request";

const cors = require("cors");
const bodyParser = require("body-parser");
const assert = require("assert");
const app = (express.Application = express());
app.use(bodyParser.json());
const port = 3000;

/**
 * MongoDB Section
 */
const MongoClient = require("mongodb").MongoClient;

// Connection String
let url = "";
const user = "pitnicky";
const password = "protectthedough";
const authMechanism = "SCRAM-SHA-1";
const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV !== "production") {
  const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));
  url = `mongodb://${user}:${password}@db.protectthedough.shop/?authMechanism=${authMechanism}&authSource=ptd`;
} else {
  const corsOptions = {
    origin: "https://protectthedough.shop",
    optionsSuccessStatus: 200
  };
  url = `mongodb://${user}:${password}@db.protectthedough.shop/?authMechanism=${authMechanism}&authSource=ptd`;
  app.use(cors(corsOptions));
  console.log(url);
}
console.log("Environment is:", NODE_ENV);
console.log("Connection string is:", url);

// Database name
const dbName = "ptd";

// Create a new MongoClient
const client = new MongoClient(url, {
  native_parser: true,
  useUnifiedTopology: true
});

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
    db.collection("catalog")
      .find()
      .toArray(function(err, docs) {
        if (typeof (docs !== undefined)) {
          res.send(docs);
        }
      });
  });
});

app.get("/users", (req, res) => {
  client.connect(function(err) {
    assert.equal(err, null);
    var db = client.db(dbName);
    db.collection("users")
      .find()
      .toArray(function(err, docs) {
        if (typeof docs !== undefined) {
          res.send(docs);
        }
      });
  });
});

app.post("/users", (req, res) => {
  client.connect(function(err) {
    assert.equal(err, null);
    var db = client.db(dbName);
    console.log("CALLED!!!");
    console.log(req.body);
    var salt = crypto.randomBytes(16).toString("hex");
    var hash = crypto
      .pbkdf2Sync(req.body.password, salt, 1000, 64, "sha512")
      .toString("hex");
    req.body.password = hash;
    db.collection("users").insertOne(req.body, function(err, r) {
      console.log(r);
      // assert.equal(null, err);
      // assert.equal(1, r.insertedCount);
    });
    res.status(201).send();
  });
});

app.get("/numofusers", (req, res) => {
  client.connect(function(err) {
    assert.equal(err, null);
    var db = client.db(dbName);
    db.collection("users")
      .find()
      .toArray(function(err, docs) {
        if (typeof docs !== undefined) {
          console.log(docs.length);
          res.send(docs.length.toString());
        }
      });
  });
});

app.get("/userinfo/:userid", (req, res) => {
  client.connect(function(err) {
    assert.equal(err, null);
    var db = client.db(dbName);
    var id = parseInt(req.params.userid);
    console.log("Called! UserID = " + id);
    db.collection("users").findOne({ userID: id }, function(err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.send(docs);
      }
    });
  });
});

app.post("/updateuser/:userid", (req, res) => {
  client.connect(function(err) {
    assert.equal(err, null);
    var db = client.db(dbName);
    var id = parseInt(req.params.userid);
    console.log("Called! UserID = " + id);
    console.log(req.body);
    db.collection("users").updateOne(
      { userID: id },
      {
        $set: {
          userID: req.body.userID,
          username: req.body.username,
          password: req.body.password,
          email: req.body.email,
          address: req.body.address
        }
      },
      function(err, result) {
        //assert.equal(null, err);
        //assert.equal(1, r.insertedCount);
        if (err) {
          //console.log(err);
        } else {
          //console.log(result);
        }
      }
    );
    res.status(201).send();
  });
});

app.get("/numofusers", (req, res) => {
  client.connect(function(err) {
    assert.equal(err, null);
    var db = client.db(dbName);
    db.collection("users")
      .find()
      .toArray(function(err, docs) {
        if (typeof docs !== undefined) {
          console.log(docs.length);
          res.send(docs.length.toString());
        }
      });
  });
});

app.get("/authenticate/:userid", (req, res) => {
  client.connect(function(err) {
    assert.equal(err, null);
    var db = client.db(dbName);
    var id = parseInt(req.params.userid);
    console.log("Called! UserID = " + id);
    db.collection("users").findOne({ userID: id }, function(err, docs) {
      if (err) {
        console.log(err);
      } else {
        var salt = crypto.randomBytes(16).toString("hex");
        var hash = crypto
          .pbkdf2Sync(req.body.password, salt, 1000, 64, "sha512")
          .toString("hex");
        if (req.params.password === docs.password) {
          res.send(true);
        } else {
          res.send(false);
        }
      }
    });
  });
});

app.listen(port, err => {2
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on port ${port}`);
});
