import { combineReducers } from 'redux';
import usersReducers from './usersReducers';
import sideBarReducers from './sideBarReducers';
import mainReducers from './mainReducers';

const rootAdminReducer = combineReducers({
    usersReducers,
    sideBarReducers,
    mainReducers
});

export default rootAdminReducer;
