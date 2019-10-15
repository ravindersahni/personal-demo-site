import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import CustomButton from '../custom-button/custom-button.styles';
import { processUserPayment } from '../../redux/user/user.actions';

const Payment = ({ processUserPayment, children }) => {
	return (
		<StripeCheckout
			name="One Cool App"
			description="Spend your money while you can!"
			amount={500}
			token={processUserPayment}
			stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
		>
			<CustomButton type="button" className="">
				{children}
			</CustomButton>
		</StripeCheckout>
	);
};

export default connect(null, { processUserPayment })(Payment);
