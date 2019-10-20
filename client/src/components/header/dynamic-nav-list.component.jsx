import React from 'react';
import { connect } from 'react-redux';
import { logInUser, logOutUser } from '../../redux/user/user.actions';
import Payment from '../payment/payment.component';
import CustomButton from '../custom-button/custom-button.styles';

const DynamicNavList = ({ user, logInUser, logOutUser }) => {
	switch (user) {
		case null:
			return null;
		case false:
			return (
				<ul>
					<li key="login">
						<CustomButton type="button" onClick={logInUser}>
							Log In with Google
						</CustomButton>
					</li>
				</ul>
			);
		default:
			return (
				<ul>
					<li key="payment">
						<Payment>Credits: {user.credits}</Payment>
					</li>,
					<li key="logout">
						<CustomButton type="button" onClick={logOutUser}>
							Log Out
						</CustomButton>
					</li>
				</ul>
			);
	}
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { logInUser, logOutUser })(DynamicNavList);
