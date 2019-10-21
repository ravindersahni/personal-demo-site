import React from 'react';
import { connect } from 'react-redux';
import { logInUser, logOutUser } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.styles';

export const LogInOutButton = ({ logInUser, logOutUser, user }) =>
	user ? (
		<CustomButton type="button" onClick={logOutUser}>
			Log Out
		</CustomButton>
	) : (
		<CustomButton type="button" onClick={logInUser}>
			Log In with Google
		</CustomButton>
	);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { logInUser, logOutUser })(LogInOutButton);
