const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

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

exports.userCreation = functions.auth.user().onCreate(event => {
	const user = event.data;
	admin
		.firestore()
		.collection("users")
		.doc(user.uid)
		.set({
			createdAt: user.metadata.creationTime,
			email: user.email,
			twitter: "",
			facebook: "",
			medium: "",
			dribble: "",
			linkedin: "",
			website: "",
			phoneNumber: "",
			name: "",
			position: "",
			company: "",
			fcmtoken: ""
		});
	// let db = admin.firestore();
	// db
	// 	.collection("users")
	// 	.doc(user.uid)
	// 	.set({
	// 		name: user.displayName,
	// 		createdOn: user.metadata.createdAt
	// 	});
});

exports.api = functions.https.onRequest(app);
