import * as sectionNames from '../constants/SectionNames';
import * as types from '../constants/SideBarActionTypes';

const initialState = {
    sectionName: sectionNames.KHACHHANG,
    items: []
};

export default function sideBarReducers(state = initialState, action) {
    switch (action.type) {
        case types.CLICK_SIDEBARITEM:
        	var newitems = action.items;
        	if(state.sectionName === action.sectionName){
	            let currentdata = state.items;
	            return {
	            	sectionName: action.sectionName,
	            	items: [...currentdata,...newitems]
	            };
        	}
        	else {
        		return{
        			sectionName: action.sectionName,
        			items: newitems
        		}
        	}
        default:
            return state;
    }
}
