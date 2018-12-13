import * as types from '../constants/MainActionTypes';
import callApi from '../../utils/apiCaller';
import * as sectionNames from '../constants/SectionNames';

const fetch = (items) => {
    return {
    	type: types.FETCH_ITEMS,
        items
    };
}


const fetchAllItems = (id) => {
	return dispatch => {
		return callApi(`categories/${id}/products`, 'GET', null).then(
			res => {
				dispatch(fetch(res.data));
			}
		);
	};
}

export const actFetchItemsRequest = (sectionName) => {
	if(sectionName === sectionNames.PRODUCTS){
		return dispatch => {
			return callApi('categories', 'GET', null).then(res => {
				let categories = res.data;
				let result = [];
		        if (categories.length > 0) {
		            categories.map((category) => {
		                result.push(category.id);
		            });
		        }
		        result.map((id) => {
		            dispatch(fetchAllItems(id));
		        });
			});
		};
	}
	else {
		return dispatch =>{
			dispatch(()=>null);
		};
	}
}