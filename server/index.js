const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");

const { herokuDB } = require("./config.js");

massive(herokuDB).then(db => {
	app.set("db", db);
});

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

const authCtrl = require("./controllers/auth/authCtrl");
const userCtrl = require("./controllers/user/userCtrl");

app.post("/api/user/create", authCtrl.createUser);
app.get("/api/user/createWithLinkedIn/:id", authCtrl.createWithLinkedIn);
app.get("/api/user/getInfo/:id", userCtrl.getUser);
app.get("/api/user/getConnectLinks/:id", userCtrl.getConnectLinks);
app.put("/api/user/connectLink/update", userCtrl.updateConnectLink);
app.post("/api/user/connectLink/delete", userCtrl.deleteConnectLink);

app.listen(port, () => {
	console.log(`Listening on ${port}.`);
});
