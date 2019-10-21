import React from 'react';
import { connect } from 'react-redux';
import Payment from '../payment/payment.component';
import LogInOutButton from '../log-in-out-button.component/log-in-out-button.component';
import { buyCreditStart } from '../../redux/credit/credit.actions';

const DynamicNavList = ({ user, buyCreditStart }) => {
	switch (user) {
		case null:
			return null;
		case false:
			return (
				<ul>
					<li key="loginOut">
						<LogInOutButton />
					</li>
				</ul>
			);
		default:
			return (
				<ul>
					<li key="payment">
						<Payment onToken={buyCreditStart}>Credits: {user.credits}</Payment>
					</li>
					<li key="logout">
						<LogInOutButton />
					</li>
				</ul>
			);
	}
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { buyCreditStart })(DynamicNavList);
