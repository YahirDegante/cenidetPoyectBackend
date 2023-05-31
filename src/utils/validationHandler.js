const validateError = (error) => {
	switch (error.message) {
		case 'Wrong type':
			return 'Review request fields';
		case 'Missing fields':
			return 'Validate fields';
		case 'Inexistent role':
			return 'Role not registered';
		case 'Nothing found':
			return 'No data found';
		case 'Password mismatch':
			return 'Credentials mismatch';
		case 'User disabled':
			return 'User disabled';
		case 'User not found':
			return 'User not found';
		case 'Email already exists':
			return 'User already exists';
		case 'Email does not exist':
			return 'User does not exist';
		case 'Token is not valid':
			return 'Validate token';
		default:
			return 'Review request';
	}
};

module.exports = {
	validateError,
};