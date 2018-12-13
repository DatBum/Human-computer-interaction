import * as types from '../constants/MainActionTypes';

const initialState = {
    items 		: []
};

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_ITEMS:
            return {
            	...state,
            	items : action.items
            };
        default:
            return state;
    }
}
