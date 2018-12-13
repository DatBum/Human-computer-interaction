import { combineReducers } from 'redux';
import products from './products';
import categories from './categories';
import carts from './carts';
import rootAdminReducer from '../admin/reducers/rootAdminReducer'

const appReducers = combineReducers({
	products,
	categories,
	carts,
	rootAdminReducer
});

export default appReducers; 