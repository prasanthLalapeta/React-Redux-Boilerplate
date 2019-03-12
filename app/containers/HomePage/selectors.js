import { createSelector } from 'reselect';

const homepage = () => (state) => state.get('homepage');

export const getPageLoadStatus = () =>
  createSelector(homepage(), (store) => store.get('loadingHomepage'));
