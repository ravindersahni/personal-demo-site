import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CustomButton from '../custom-button/custom-button.styles';

const Payment = ({ onToken, children }) => {
	return (
		<StripeCheckout
			name="Use these demo values:"
			description="4242 4242 4242 4242, 01/22, 123"
			amount={500}
			token={onToken}
			stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
		>
			<CustomButton type="button" className="">
				{children}
			</CustomButton>
		</StripeCheckout>
	);
};

export default Payment;
