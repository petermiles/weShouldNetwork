const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const axios = require("axios");

const { herokuDb } = require("./config.js");

massive(herokuDb).then(db => {
	app.set("db", db);
});

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

const authCtrl = require("./controllers/auth/authCtrl");
app.post("/api/user/create", authCtrl.createUser);

app.listen(port, () => {
	console.log(`Listening on ${port}.`);
});
