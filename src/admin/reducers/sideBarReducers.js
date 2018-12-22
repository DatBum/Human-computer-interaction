import * as sectionNames from '../constants/SectionNames';
import * as types from '../constants/SideBarActionTypes';

const initialState = {
    sectionName: sectionNames.USERS,
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
        case types.ADD_ITEM:
            let addeditems = [...state.items,action.item]
            return{
                ...state,
                items: addeditems
            }
        case types.DELETE_ITEM:
            let deleteditems = state.items.filter((todo) => todo.id !== action.id);
            return {
                ...state,
                items: deleteditems
            }
        default:
            return state;
    }
}
