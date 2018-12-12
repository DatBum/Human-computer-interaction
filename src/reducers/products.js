import * as Types from './../constants/ActionTypes';
var initialState = [];

const products = (state = initialState, action) => {
	switch(action.type){
		case Types.FETCH_PRODUCTS:
			return [...state, action.products];
		default: 
			return [...state];
	}
};

export default products;