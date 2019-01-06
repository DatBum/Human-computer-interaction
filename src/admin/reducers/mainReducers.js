import * as sectionNames from '../constants/SectionNames';
import * as types from '../constants/MainActionTypes';

const initialState = {
	sectionName: sectionNames.USERS,
    searchStr: '',
    searchOnChange: '',
    isShowForm  : true
};

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case types.SEARCH_ITEMS:
            return {
                ...state,
                searchStr: action.searchStr
            }
        case types.SEARCH_ONCHANGE:
            return {
                ...state,
                searchOnChange: action.searchOnChange
            }
        case types.CLEAR_SEARCH:
            return{
                ...state,
                searchStr: '',
                searchOnChange: ''
            }
        case types.TOGGLE_FORM:
            return{
                ...state,
                isShowForm: !state.isShowForm
            }
        default:
            return state;
    }
}
