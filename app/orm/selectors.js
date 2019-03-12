import orm from 'orm';
import { createSelector } from 'reselect';
import { createSelector as ormCreateSelector } from 'redux-orm';

const ormSelector = (state) => state.get('orm');

export const getPageLoadStatus = () => createSelector(
  ormSelector,
  ormCreateSelector(orm, (session) =>
    session.Homepage.all().toRefArray()
  )
);
