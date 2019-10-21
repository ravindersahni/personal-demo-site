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

export const buyCreditToUnlockKoanStart = (token, koan_id) => ({
	type: CreditActionTypes.BUY_CREDIT_TO_UNLOCK_KOAN_START,
	payload: { token, koan_id }
});

export const buyCreditToUnlockKoanSuccess = (user, koan_id) => ({
	type: CreditActionTypes.BUY_CREDIT_TO_UNLOCK_KOAN_SUCCESS,
	payload: { credits: user.credits, koan_id }
});

export const buyCreditToUnlockKoanFailure = error => ({
	type: CreditActionTypes.BUY_CREDIT_TO_UNLOCK_KOAN_FAILURE,
	payload: error
});
