import { combineReducers } from 'redux';
import usersReducers from './usersReducers';
import sideBarReducers from './sideBarReducers';
import mainReducers from './mainReducers';
// import warehouseReducers from './warehouseReducers'

const rootAdminReducer = combineReducers({
    usersReducers,
    sideBarReducers,
    mainReducers
});

export default rootAdminReducer;
