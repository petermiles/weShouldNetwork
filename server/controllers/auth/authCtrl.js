const createUser = (req, res) => {
	req.app
		.get("db")
		.createUser({ email: req.body.email, name: rq.body.name })
		.then(result => {
			console.log(result);
		})
		.catch(console.log(error));
};

module.exports = {
	createUser
};
