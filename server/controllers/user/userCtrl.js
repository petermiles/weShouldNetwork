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
		.getConnectLinks({ uid: req.params.id })
		.then(result => {
			res.json(result);
		})
		.catch(console.log);
};

const addConnectLink = (req, res) => {
	req.app
		.get("db")
		.connectLinkAdd(req.body)
		.then(result => {
			return res.json(result);
		});
};

const updateConnectLink = (req, res) => {
	req.app
		.get("db")
		.connectLinkEdit({ id: req.body.id, link: req.body.link })
		.then(result => {
			return res.json(result);
		});
};

const deleteConnectLink = (req, res) => {
	req.app
		.get("db")
		.connectLinkDelete({ id: req.params.id })
		.then(result => {
			return res.json(result);
		});
};

module.exports = {
	getUser,
	getConnectLinks,
	addConnectLink,
	updateConnectLink,
	deleteConnectLink,
};
