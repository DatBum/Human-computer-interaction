import * as types from '../constants/SideBarActionTypes';

const initialState = {
    sectionName: "Khách Hàng"
};

export default function sideBarReducers(state = initialState, action) {
    switch (action.type) {
        case types.CLICK_SIDEBARITEM:
            return {sectionName: action.text};

        default:
            return state;
    }
}
