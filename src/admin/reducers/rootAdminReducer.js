import { combineReducers } from 'redux';
import usersReducers from './usersReducers';
import sideBarReducers from './sideBarReducers';

const rootAdminReducer = combineReducers({
    usersReducers,
    sideBarReducers
});

export default rootAdminReducer;
