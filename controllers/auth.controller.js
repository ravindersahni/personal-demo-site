exports.logInWithGoogle = () => {};

exports.getGoogleCallback = (req, res) => {
	res.redirect(req.session.redirectTo);
};

exports.performLogout = (req, res) => {
	req.logout();
	res.redirect('https://ravindersahni.com');
};

exports.getCurrentUser = (req, res) => res.send(req.user);
