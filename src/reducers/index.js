import { combineReducers } from 'redux';
import products from './products';
import categories from './categories';
import carts from './carts';
import searchProducts from './searchProducts';
import rootAdminReducer from '../admin/reducers/rootAdminReducer'
import HeaderReducers from './HeaderReducers';

const appReducers = combineReducers({
	products,
	categories,
	carts,
	searchProducts,
	rootAdminReducer,
  HeaderReducers
});

export default appReducers; 
