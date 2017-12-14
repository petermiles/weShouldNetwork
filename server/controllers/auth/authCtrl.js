const createUser = (req, res) => {
	req.app
		.get('db')
		.createUser(req.body)
		.then(result => {
			res.json(result[0]);
		})
		.catch(err => {
			console.log;
			res.json(err);
		});
};
module.exports = {
	createUser
};
