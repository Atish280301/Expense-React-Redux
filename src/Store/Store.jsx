import { createStore, combineReducers } from 'redux';
import rootReducer from '../Reducer/Combine';
const store = createStore(rootReducer);
export default store;
