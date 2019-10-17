import { createSelector } from 'reselect';

export const selectKoans = state => state.koans;

export const selectAllKoans = createSelector([ selectKoans ], koanContainer => koans.all);
