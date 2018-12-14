import * as sectionNames from '../constants/SectionNames';
import * as types from '../constants/MainActionTypes';

const initialState = {
	sectionName: sectionNames.USERS,
	items: []
};

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_ITEMS:
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
