import React from 'react';
import { connect } from 'react-redux';
import { logInUser, logOutUser } from '../../redux/user/user.actions';
import Payment from '../payment/payment.component';
import { NavContainer, LogoContainer, HeaderContainer } from './header.styles';
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
					<li key="github">
						<GithubLogoLink />
					</li>,
					<li key="login">
						<CustomButton type="button" onClick={logIn}>
							Log In with Google
						</CustomButton>
					</li>
				];
			default:
				return [
					<li key="github">
						<GithubLogoLink />
					</li>,
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
			<NavContainer>
				<ul>{getNavItems(user, logInUser, logOutUser)}</ul>
			</NavContainer>
		</HeaderContainer>
	);
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { logInUser, logOutUser })(Header);
