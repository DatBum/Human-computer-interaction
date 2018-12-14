import {CHANGE_SELECTED_CURRENCY} from '../constants/action-types';
import {SET_NEW_SUM} from '../constants/ActionTypes';

const initState = {
  dropDowns: {
    languages: ['English', 'Vietnamese', 'Japanese', 'Chinese'],
    currencies: ['VND', 'USD', 'AUD']
  },
  selectedLanguage: "English",
  selectedCurrency: "VND",
  cartSum: 0
}

const headerReducers = (state = initState, action) => {
  switch(action.type) {
    case CHANGE_SELECTED_CURRENCY:
      return {...state, selectedCurrency: action.currency};
    case SET_NEW_SUM:
      return {...state, cartSum: action.sum};
    default:
      return state;
  }
}

export default headerReducers;
