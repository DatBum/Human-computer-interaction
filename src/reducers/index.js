import { combineReducers } from 'redux';
import products from './products';
import categories from './categories';

const appReducers = combineReducers({
	products,
	categories
});

export default appReducers; 