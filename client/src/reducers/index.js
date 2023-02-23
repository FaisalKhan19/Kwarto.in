import {combineReducers} from 'redux';
import {authReducer} from './auth';
// Combine multiple reducers
const rootReducer = combineReducers({
    user:authReducer,
  });

export default rootReducer;