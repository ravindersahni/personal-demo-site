import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payment from '../payment/Payment.component';

const Header = ({ user }) => {
	const appName = 'One Cool App';

	const getNavItems = user => {
		switch (user) {
			case null:
				return;
			case false:
				return (
					<li key="login">
						<a href="/auth/google">Log In with Google</a>
					</li>
				);
			default:
				return [
					<li key="payment">
						<Payment />
					</li>,
					<li key="logout">
						<a href="/api/logout">Log Out</a>
					</li>
				];
		}
	};

	return (
		<header>
			<nav>
				<div className="nav-wrapper">
					<Link to={user ? '/surveys' : '/'} className="brand-logo center">
						{appName}
					</Link>
					<ul id="nav-mobile" className="right">
						{getNavItems(user)}
					</ul>
				</div>
			</nav>
		</header>
	);
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Header);
