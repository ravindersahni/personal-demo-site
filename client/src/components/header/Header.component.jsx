import React from 'react';
import { connect } from 'react-redux';

const Header = ({ user }) => {
	const appName = 'One Cool App';

	const getContent = user => {
		switch (user) {
			case null:
				return '';
			case false:
				return <a href="/auth/google">Log In with Google</a>;
			default:
				return <a href="/api/logout">Log Out</a>;
		}
	};

	return (
		<header>
			<nav>
				<div className="nav-wrapper">
					<a href="/" className="brand-logo center">
						{appName}
					</a>
					<ul id="nav-mobile" className="right">
						<li>{getContent(user)}</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Header);
