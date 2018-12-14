import * as types from '../constants/SideBarActionTypes';
import callApi from '../../utils/apiCaller';
import * as sectionNames from '../constants/SectionNames';

export const clickSideBar = (items,sectionName) => {
    return {
    	type: types.CLICK_SIDEBARITEM,
        sectionName,
        items
    };
}


const deleteItemAction = (id) =>{
	return{
		type: types.DELETE_ITEM,
        id
	}
}


export const deleteItem = (sectionName,item) => {
	const id = item.id;
	const catid = item.categoryId;
	console.log(catid)
	if(sectionName === sectionNames.USERS){
		return dispatch => {
			return callApi(`users/${id}`, 'DELETE', null).then(res => {
				dispatch(deleteItemAction(res.data.id));
			});
		};
	}
	else if(sectionName === sectionNames.PRODUCTS){
		return dispatch => {
			return callApi(`/categories/${catid}/products/${id}`, 'DELETE', null).then(res => {
				dispatch(deleteItemAction(res.data.id));
			});
		};	
	}
}

export const actFetchItemsRequest = (sectionName) => {
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
							dispatch(clickSideBar(res.data,sectionNames.PRODUCTS));
						}
					);
		        });
			});
		};
	}
	else if(sectionName === sectionNames.USERS) {
		return dispatch =>{
			return callApi(`users`,'GET', null).then(res =>{
				dispatch(clickSideBar(res.data,sectionNames.USERS));
			});
		};
	}
	else {
		return dispatch =>{
			dispatch(clickSideBar([],sectionName));
		};
	}
}