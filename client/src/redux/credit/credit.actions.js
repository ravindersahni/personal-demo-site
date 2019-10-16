import * as CreditActionTypes from './credit.types';

export const buyCreditStart = token => ({
	type: CreditActionTypes.BUY_CREDIT_START,
	payload: token
});

export const buyCreditSuccess = user => ({
	type: CreditActionTypes.BUY_CREDIT_SUCCESS,
	payload: user.credits
});

export const buyCreditFailure = error => ({
	type: CreditActionTypes.BUY_CREDIT_FAILURE,
	payload: error
});
