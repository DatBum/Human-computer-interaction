import * as Types from './../constants/ActionTypes';
var initialState = [];

const carts = (state = initialState, action) => {
	switch(action.type){
		case Types.ADD_CART:
			return [...state, action.product];
		case Types.DELETE_CART:
			return state.filter((product) => product.id !== action.id)
		default: 
			return [...state];
	}
};

export default carts;