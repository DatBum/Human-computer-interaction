import * as types from '../constants/SideBarActionTypes';
import callApi from '../../utils/apiCaller';
import * as sectionNames from '../constants/SectionNames';

function clickSideBar(items,sectionName) {
    return {
    	type: types.CLICK_SIDEBARITEM,
        sectionName,
        items
    };
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
	else {
		return dispatch =>{
			dispatch(clickSideBar([],sectionName));
		};
	}
}