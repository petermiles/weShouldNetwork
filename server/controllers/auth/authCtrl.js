const axios = require('axios');

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

const createWithLinkedIn = (req, res) => {
	let parsedData = '';
	console.log(req.params.id);
	axios.defaults.headers.common['Authorization'] = `Bearer ${req.params.id}`;
	axios
		.get(
			`https://api.linkedin.com/v1/people/~:(positions,picture-url,first-name,last-name,public-profile-url)?format=json`
		)
		.then(result => {
			const parsedData = {
				uid: 'LinkedIn' + result.data.id,
				name: result.data.firstName + ' ' + result.data.lastName,
				title: result.data.positions.values[0].title,
				company: result.data.positions.values[0].company.name,
				url: result.data.publicProfileUrl,
				pic: result.data.pictureUrl
			};
			return parsedData;
		})
		.then(data => {
			req.app
				.get('db')
				.createUser(data)
				.then(result => {
					console.log(result);
				});
		})
		.catch(console.log);
};
module.exports = {
	createUser,
	createWithLinkedIn
};
