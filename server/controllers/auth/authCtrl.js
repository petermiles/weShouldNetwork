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
	console.log(req.params);
	axios.defaults.headers.common['Authorization'] = `Bearer ${req.params.id}`;
	axios
		.get(
			`https://api.linkedin.com/v1/people/~:(id,positions,picture-url,first-name,last-name,public-profile-url)?format=json`
		)
		.then(result => {
			const parsedData = {
				uid: 'LinkedIn' + result.data.id,
				name: result.data.firstName + ' ' + result.data.lastName,
				title: result.data.positions.values[0].title,
				company: result.data.positions.values[0].company.name,
				url: result.data.publicProfileUrl,
				pic: result.data.pictureUrl,
			};
			return parsedData;
		})
		.then(data => {
			let parsedData = {
				userData: '',
				userLinks: '',
			};
			req.app
				.get('db')
				.createLinkedInUser(data)
				.then(result => {
					parsedData.userData = result[0];
					req.app
						.get('db')
						.connectLinkGet({ uid: parsedData.userData.uid })
						.then(result => {
							parsedData.userLinks = result;
							res.json(parsedData);
						});
				})
				.catch(console.log);
		})
		.catch(console.log);
};
module.exports = {
	createUser,
	createWithLinkedIn,
};
