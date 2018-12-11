import * as types from '../constants/SideBarActionTypes';

const initialState = [{
    titleSection: "Khách Hàng"
}];

export default function sideBarReducers(state = initialState, action) {
    switch (action.type) {
        case types.CLICK_SIDEBARITEM:
            console.log(action.titleSection);
            return action.titleSection;

        default:
            return state;
    }
}
