import React from 'react';
import { connect } from 'react-redux';
import Payment from '../payment/payment.component';
import { NavContainer, LogoContainer, HeaderContainer } from './header.styles';

const Header = ({ user }) => {
	const appName = 'RS';

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
					<li key="credits">Credits: {user.credits}</li>,
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
		<HeaderContainer>
			<LogoContainer to={user ? '/surveys' : '/'}>{appName}</LogoContainer>
			<NavContainer>
				<ul>{getNavItems(user)}</ul>
			</NavContainer>
		</HeaderContainer>
	);
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Header);
