const getUser = (req, res) => {
	req.app
		.get('db')
		.getUserProfileInfo({ uid: req.params.id })
		.then(result => {
			console.log(result);
			return res.json(result[0]);
		});
};

const getConnectLinks = (req, res) => {
	req.app
		.get('db')
		.getConnectLinks({ userid: req.params.id })
		.then(result => {
			res.json(result);
		})
		.catch(console.log);
};

module.exports = {
	getUser,
	getConnectLinks
};
