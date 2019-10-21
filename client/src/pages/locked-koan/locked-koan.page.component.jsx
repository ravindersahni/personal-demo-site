import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LockedKoanArticle, KoanP, KoanButtonContainer } from './locked-koan.styles';
import Payment from '../../components/payment/payment.component';
import LogInOutButton from '../../components/log-in-out-button.component/log-in-out-button.component';
import useDismissLikeModal from '../../custom-hooks/use-dismiss-like-modal';

const LockedKoanPage = ({ params, history, user }) => {
	useDismissLikeModal();

	if (!user) {
		return (
			<LockedKoanArticle>
				<h1>You need to log in to see koans</h1>
				<KoanP>
					The first one was on the house, but from here on out you'll need to unlock them
					at the cost of 1 credit a piece.
				</KoanP>
				<KoanP>
					Good news, though! Credits are free. You just need to go through the process and
					provide the appropriate demo input.
				</KoanP>
				<KoanButtonContainer>
					<LogInOutButton />
				</KoanButtonContainer>
			</LockedKoanArticle>
		);
	}
	return user.credits ? (
		<LockedKoanArticle>
			<h1>To be replaced with the unlocking flow</h1>
		</LockedKoanArticle>
	) : (
		<LockedKoanArticle>
			<h1>You're trying to view a locked koan</h1>
			<KoanP>That'll cost you 1 credit, but you don't seem to have any.</KoanP>
			<KoanButtonContainer>
				<Payment>Buy Credits for Free</Payment>
			</KoanButtonContainer>
		</LockedKoanArticle>
	);
};

const mapStateToProps = ({ user }) => ({ user });

export default withRouter(connect(mapStateToProps, null)(LockedKoanPage));
