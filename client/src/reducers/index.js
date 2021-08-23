import { combineReducers } from 'redux';

import posts from './posts';
import buy from './buyReducer';

export const reducers = combineReducers({ posts ,buy });
