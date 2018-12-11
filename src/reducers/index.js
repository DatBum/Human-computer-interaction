import { combineReducers } from 'redux';
import products from './products';
import categories from './categories';
import carts from './carts';
import rootAdminReducer from '../admin/reducers/rootAdminReducer'
import HeaderReducers from './HeaderReducers';

const appReducers = combineReducers({
	products,
	categories,
<<<<<<< 80482e241ca84cbfe3b6024366f3a8658f30c1b9
	carts,
	rootAdminReducer
=======
  rootAdminReducer,
  HeaderReducers
>>>>>>> Reduxing success
});

export default appReducers; 
