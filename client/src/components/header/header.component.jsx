import React from 'react';
import { connect } from 'react-redux';
import { logInUser, logOutUser } from '../../redux/user/user.actions';
import Payment from '../payment/payment.component';
import { RightNavContainer, LogoContainer, HeaderContainer } from './header.styles';
import CustomButton from '../custom-button/custom-button.styles';
import GithubLogoLink from '../github-logo-link/github-logo-link.component';

const Header = ({ user, logInUser, logOutUser }) => {
	const appName = 'RS';

	const getNavItems = (user, logIn, logOut) => {
		switch (user) {
			case null:
				return;
			case false:
				return [
					<li key="login">
						<CustomButton type="button" onClick={logIn}>
							Log In with Google
						</CustomButton>
					</li>
				];
			default:
				return [
					<li key="payment">
						<Payment>Credits: {user.credits}</Payment>
					</li>,
					<li key="logout">
						<CustomButton type="button" onClick={logOut}>
							Log Out
						</CustomButton>
					</li>
				];
		}
	};

	return (
		<HeaderContainer>
			<LogoContainer to={user ? '/surveys' : '/'}>{appName}</LogoContainer>
			<LogoContainer to="/koans">Koans</LogoContainer>
			<GithubLogoLink />
			<RightNavContainer>
				<ul>{getNavItems(user, logInUser, logOutUser)}</ul>
			</RightNavContainer>
		</HeaderContainer>
	);
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { logInUser, logOutUser })(Header);
