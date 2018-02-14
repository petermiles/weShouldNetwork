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
	axios.defaults.headers.common['Authorization'] = `Bearer ${req.params.id}`;
	axios
		.get(
			`https://api.linkedin.com/v1/people/~:(id,positions,picture-url,first-name,last-name,public-profile-url)?format=json`
		)
		.then(linkedinResult => {
			req.app
				.get('db')
				.userCheckAuth({ uid: linkedinResult.data.id })
				.then(checkAuthResult => {
					if (checkAuthResult.length) {
						return res.json(checkAuthResult[0]);
					} else {
						req.app
							.get('db')
							.createLinkedInUser({
								uid: linkedinResult.data.id,
								name:
									linkedinResult.data.firstName +
									' ' +
									linkedinResult.data.lastName,
								title: linkedinResult.data.positions.values[0].title,
								company: linkedinResult.data.positions.values[0].company.name,
								url: linkedinResult.data.publicProfileUrl,
								pic: linkedinResult.data.pictureUrl,
							})
							.then(result => {
								console.log('done');
								return res.json(result);
							});
					}
				});
		});

	// 			.then(result => {
	// 				console.log(result);

	// 				return parsedData;
	// 			})
	// 			.then(data => {
	// 				let parsedData = {
	// 					userData: '',
	// 					userLinks: '',
	// 				};

	// 			})
	// 			.catch(console.log);
	// 	}
	// });
};
module.exports = {
	createUser,
	createWithLinkedIn,
};
