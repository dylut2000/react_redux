import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import { combineReducers } from 'redux';

/**
 * u can rename ur reducer name or just leave
 * them as their are, im going to rename them for
 * easy access
 */
const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer
});

export default rootReducer;
