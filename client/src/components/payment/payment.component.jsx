import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import CustomButton from '../custom-button/custom-button.styles';
import { buyCreditStart } from '../../redux/credit/credit.actions';

const Payment = ({ buyCreditStart, children }) => {
	return (
		<StripeCheckout
			name="Use these demo values:"
			description="4242 4242 4242 4242, 01/22, 123"
			amount={500}
			token={buyCreditStart}
			stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
		>
			<CustomButton type="button" className="">
				{children}
			</CustomButton>
		</StripeCheckout>
	);
};

export default connect(null, { buyCreditStart })(Payment);
