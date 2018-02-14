const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const cors = require('cors');

const { herokuDB } = require('./config.js');

massive(herokuDB).then(db => {
	app.set('db', db);
});

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

const authCtrl = require('./controllers/auth/authCtrl');
const userCtrl = require('./controllers/user/userCtrl');

app.post('/api/user/authWithLinkedIn/:id', authCtrl.createWithLinkedIn);
app.get('/api/user/getInfo/:id', userCtrl.getUser);

app.get('/api/user/getConnectLinks/:uid', userCtrl.getConnectLinks);
app.post('/api/user/connectLink/add', userCtrl.addConnectLink);
app.put('/api/user/connectLink/update', userCtrl.updateConnectLink);
app.delete('/api/user/connectLink/delete/:linkid', userCtrl.deleteConnectLink);

app.get('/api/user/favorites/get/:userid', userCtrl.getFavorites);
app.post('/api/user/favorites/save', userCtrl.saveFavorite);
app.post('/api/user/favorites/checkSaved', userCtrl.checkSaved);

app.listen(port, () => {
	console.log(`Listening on ${port}.`);
});
