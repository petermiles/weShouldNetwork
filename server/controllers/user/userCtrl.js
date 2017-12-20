const getUser = (req, res) => {
	req.app
		.get("db")
		.getUserProfileInfo({ uid: req.params.id })
		.then(result => {
			return res.json(result[0]);
		});
};

const getConnectLinks = (req, res) => {
	req.app
		.get("db")
		.getConnectLinks({ userid: req.params.id })
		.then(result => {
			res.json(result);
		})
		.catch(console.log);
};

const updateConnectLink = (req, res) => {
	req.app
		.get("db")
		.connectEditLink({ id: req.body.id, link: req.body.link })
		.then(result => {
			console.log(result);
		});
};

const deleteConnectLink = (req, res) => {
	req.app
		.get("db")
		.connectDeleteLink({ id: req.body.id, uid: req.body.uid })
		.then(result => {
			console.log(result);
		});
};

module.exports = {
	getUser,
	getConnectLinks,
	updateConnectLink,
	deleteConnectLink,
};
