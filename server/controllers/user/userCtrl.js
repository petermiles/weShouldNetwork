const getUser = (req, res) => {
	req.app
		.get('db')
		.getUserProfileInfo({ uid: req.params.id })
		.then(result => {
			res.json(result[0]);
		});
};

module.exports = {
	getUser
};
