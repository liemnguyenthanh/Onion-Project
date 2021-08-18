import { combineReducers } from 'redux';

import posts from './posts';
import buy from './buy';

export const reducers = combineReducers({ posts ,buy });
