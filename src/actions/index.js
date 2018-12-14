import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProducts = (products) => {
	return {
		type: Types.FETCH_PRODUCTS,
		products
	}
} 

export const actFetchCategories = (categories) => {
	return {
		type: Types.FETCH_CATEGORIES,
		categories
	}
}

export const actFetchProductsRequest = (id) => {
	return dispatch => {
		return callApi(`categories/${id}/products`, 'GET', null).then(res => {
			dispatch(actFetchProducts(res.data))
		});
	};
}

export const actFetchCategoriesRequest = () => {
	return dispatch => {
		return callApi('categories', 'GET', null).then(res => {
			dispatch(actFetchCategories(res.data))
		});
	};
}

export const actAddCart = (product) => {
	return{
		type: Types.ADD_CART,
		product
	}
}

export const actDeleteCart = (id) => {
	return {
		type: Types.DELETE_CART,
		id
	}
}

export const actSearch = (product, name) => {
	return {
		type: Types.SEARCH_PRODUCT,
		product,
		name
	}
}