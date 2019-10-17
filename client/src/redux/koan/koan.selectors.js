import { createSelector } from 'reselect';

export const selectKoanContainer = state => state.koanContainer;

export const selectKoans = createSelector(
	[ selectKoanContainer ],
	koanContainer => koanContainer.koans
);
