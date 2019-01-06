import { combineReducers } from 'redux';
import usersReducers from './usersReducers';
import sideBarReducers from './sideBarReducers';
import mainReducers from './mainReducers';
import InOutReducers from './InOutReducers';
// import warehouseReducers from './warehouseReducers'

const rootAdminReducer = combineReducers({
    usersReducers,
    sideBarReducers,
    mainReducers,
    InOutReducers
});

export default rootAdminReducer;
