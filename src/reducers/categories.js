import * as Types from './../constants/ActionTypes';
var initialState = [];

const categories = (state = initialState, action) => {
	switch(action.type){
		case Types.FETCH_CATEGORIES:
			return action.categories;
		default: 
			return state;
	}
};

export default categories;