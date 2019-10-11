const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('mongoose').model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id);
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: '/auth/google/callback'
		},
		async (accessToken, refreshToken, profile, done) => {
			let user;
			try {
				const googleId = profile.id;
				user = await User.findOne({ googleId });
				if (!user) {
					user = await User.create({ googleId });
				}
			} catch (error) {
				return done(error);
			}
			return done(null, user);
		}
	)
);
