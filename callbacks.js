var getUser = (id, callback) => {
	var user = {
		id : id,
		name : 'Ariane'
	};

	setTimeout(() => {
		callback(user);
	}, 3000);
};

getUser(24, (userObject) => {
	console.log(userObject);
});