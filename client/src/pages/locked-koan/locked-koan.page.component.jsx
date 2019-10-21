import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { LockedKoanArticle, KoanP, KoanButtonContainer } from './locked-koan.styles';
import { buyCreditToUnlockKoanStart } from '../../redux/credit/credit.actions';
import { unlockKoanByIdStart } from '../../redux/user/user.actions';
import Payment from '../../components/payment/payment.component';
import CustomButton from '../../components/custom-button/custom-button.styles';
import LogInOutButton from '../../components/log-in-out-button.component/log-in-out-button.component';
import useDismissLikeModal from '../../custom-hooks/use-dismiss-like-modal';

const LockedKoanPage = ({ user, buyCreditToUnlockKoanStart, unlockKoanByIdStart }) => {
	const history = useHistory();
	const { koan_id } = useParams();

	useDismissLikeModal();

	useEffect(
		() => {
			if (user && user.unlockedKoans.some(id => id === koan_id)) {
				history.replace(`/koans/${koan_id}`);
			}
		},
		[ user, history, koan_id ]
	);

	if (!user) {
		return (
			<LockedKoanArticle>
				<h1>You need to log in to see koans</h1>
				<KoanP>
					The first one is on the house, but from there on out you'll need to unlock them
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
			<h1>You have the power</h1>
			<KoanP>
				It'll cost you 1 credit to unlock this koan, but you're basically loaded.
			</KoanP>
			<KoanButtonContainer>
				<CustomButton type="button" onClick={() => unlockKoanByIdStart(koan_id)}>
					I'm worth it!
				</CustomButton>
			</KoanButtonContainer>
		</LockedKoanArticle>
	) : (
		<LockedKoanArticle>
			<h1>You're trying to view a locked koan</h1>
			<KoanP>That'll cost you 1 credit, but you don't seem to have any.</KoanP>
			<KoanButtonContainer>
				<Payment onToken={token => buyCreditToUnlockKoanStart(token, koan_id)}>
					Buy Credits for Free
				</Payment>
			</KoanButtonContainer>
		</LockedKoanArticle>
	);
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, {
	buyCreditToUnlockKoanStart,
	unlockKoanByIdStart
})(LockedKoanPage);
