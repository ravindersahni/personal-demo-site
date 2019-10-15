exports.logInWithGoogle = () => {};

exports.getGoogleCallback = (req, res) => {
	res.redirect('/surveys');
};

exports.performLogout = (req, res) => {
	req.logout();
	res.redirect('/');
};

exports.getCurrentUser = (req, res) => res.send(req.user);
