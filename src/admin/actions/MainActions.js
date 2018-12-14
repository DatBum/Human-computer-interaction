import * as types from '../constants/MainActionTypes';
import callApi from '../../utils/apiCaller';
import * as sectionNames from '../constants/SectionNames';

const fetchAllItems = (items,sectionName) => {
	return {
		type: types.FETCH_ITEMS,
		sectionName,
		items
	}
}
export const actFetchItemsRequest = (sectionName) => {
	console.log(sectionName);
	if(sectionName === sectionNames.PRODUCTS){
		return dispatch => {
			return callApi('categories', 'GET', null).then(res => {
				let categories = res.data;
				var data = null;
				let result = [];
		        if (categories.length > 0) {
		            categories.map((category) => {
		                result.push(category.id);
		            });
		        }
		        result.map((id) => {
		        	callApi(`categories/${id}/products`, 'GET', null).then(
						res => {
							dispatch(fetchAllItems(res.data,sectionNames.PRODUCTS))
						}
					);
		        });
			});
		};
	}
	else if(sectionName === sectionNames.USERS) {
		return dispatch =>{
			return callApi(`users`,'GET', null).then(res =>{
				dispatch(fetchAllItems(res.data,sectionNames.USERS))
			});
		};
	}
	else {
		return dispatch =>{
			dispatch(()=>null);
		};
	}
}