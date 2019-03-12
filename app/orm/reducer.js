import { createReducer } from 'redux-orm';
import orm from 'orm';

export const reducer = createReducer(orm);
