import * as types from '../constants/SideBarActionTypes';

export function clickSideBar(text) {
    return {
    	type: types.CLICK_SIDEBARITEM,
        text
    };
}