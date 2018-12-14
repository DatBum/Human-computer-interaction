import * as Types from './../constants/ActionTypes';
var initialState = [];

const searchProducts = (state = initialState, action) => {
	switch(action.type){
		case Types.SEARCH_PRODUCT:
			if (action.product.name.toLowerCase().search(action.name.toLowerCase()) !== -1){
				return [...state, action.product];	
			}
			else{
				return [...state];
			}
		default: 
			return [...state];
	}
};

export default searchProducts;