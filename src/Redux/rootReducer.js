import { combineReducers } from 'redux';
import reducer from './reducers'; 
const rootReducer = combineReducers({cart: reducer});

export default rootReducer;
