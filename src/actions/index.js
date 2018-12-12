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

// export const actGetProduct = (product) => {
// 	return {
// 		type: Types.GET_PRODUCT,
// 		product
// 	}
// }

// export const actGetProductRequest = (idCategory, idProduct) => {
// 	return dispatch => {
// 		return callApi(`categories/${idCategory}/products/${idProduct}`,'GET',null).then(res => {
// 			dispatch(actFetchCategories(res.data))
// 		});
// 	}
// }