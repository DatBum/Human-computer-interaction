import * as types from '../constants/SideBarActionTypes';
import callApi, { callApi2, callApi3 } from '../../utils/apiCaller';
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

const addItemAction = (item) =>{
	return{
		type: types.ADD_ITEM,
        item
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
			return callApi(`categories/${catid}/products/${id}`, 'DELETE', null).then(res => {
				dispatch(deleteItemAction(res.data.id));
			});
		};	
	}
	else if(sectionName === sectionNames.INOUT){
		return dispatch => {
			return callApi2(`/InOutInfo/${id}`, 'DELETE', null).then(res => {
				dispatch(deleteItemAction(res.data));
			});
		};	
	}
	else if(sectionName === sectionNames.TRANSPORT){
		return dispatch => {
			return callApi3(`/Transport/${id}`, 'DELETE', null).then(res => {
				dispatch(deleteItemAction(res.data));
			});
		};	
	}
}

export const addItem = (sectionName,item) => {
	const catid = item.categoryId;
	if(sectionName === sectionNames.USERS){
		return dispatch => {
			return callApi(`users/`, 'POST', item).then(res => {
				dispatch(addItemAction(res.data));
			});
		};
	}
	else if(sectionName === sectionNames.PRODUCTS){
		return dispatch => {
			return callApi(`categories/${catid}/products`, 'POST', item).then(res => {
				dispatch(addItemAction(res.data));
			});
		}
	}
	else if(sectionName === sectionNames.TRANSPORT){
		return dispatch => {
			// return callApi3(,item).then(res => {
			// 	console.log(res);
			// 	dispatch(addItemAction(res.data));
			// });
		}
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
	else if(sectionName === sectionNames.INOUT) {
		return dispatch =>{
			return callApi2('InOutInfo','GET', null).then(res =>{
				dispatch(clickSideBar(res.data,sectionNames.INOUT));
			});
		};
	}
	else if(sectionName === sectionNames.TRANSPORT) {
		return dispatch =>{
			return callApi3('Transport','GET', null).then(res =>{
				dispatch(clickSideBar(res.data,sectionNames.TRANSPORT));
			});
		};
	}
	else {
		return dispatch =>{
			dispatch(clickSideBar([],sectionName));
		};
	}
}