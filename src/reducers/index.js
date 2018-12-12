import { combineReducers } from 'redux';
import products from './products';
import categories from './categories';
import rootAdminReducer from '../admin/reducers/rootAdminReducer'

const appReducers = combineReducers({
	products,
	categories,
	rootAdminReducer
});

export default appReducers; 