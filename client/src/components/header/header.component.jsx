import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logInUser, logOutUser } from '../../redux/user/user.actions';
import Payment from '../payment/payment.component';
import { LeftNavContainer, RightNavContainer, HeaderContainer } from './header.styles';
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
			<LeftNavContainer>
				<ul>
					<li>
						<Link to={user ? '/surveys' : '/'}>{appName}</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/koans">Koans</Link>
					</li>
					<li>
						<Link to="/">Weather</Link>
					</li>
					<li>
						<Link to="/">Games</Link>
					</li>
					<li>
						<GithubLogoLink />
					</li>
				</ul>
			</LeftNavContainer>
			<RightNavContainer>
				<ul>{getNavItems(user, logInUser, logOutUser)}</ul>
			</RightNavContainer>
		</HeaderContainer>
	);
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { logInUser, logOutUser })(Header);
