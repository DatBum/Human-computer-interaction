import * as types from '../constants/MainActionTypes';
import callApi from '../../utils/apiCaller';
import * as sectionNames from '../constants/SectionNames';

export const handleSearch = (searchStr) => {
	return {
		type: types.SEARCH_ITEMS,
		searchStr
	}
}

export const handleSearchOnChange = (searchOnChange) => {
	return {
		type: types.SEARCH_ONCHANGE,
		searchOnChange
	}
}

export const handleClearSearch = () => {
	return {
		type: types.CLEAR_SEARCH
	}
}