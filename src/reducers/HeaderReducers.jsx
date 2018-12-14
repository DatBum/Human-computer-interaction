import {CHANGE_SELECTED_CURRENCY} from '../constants/action-types';

const initState = {
  dropDowns: {
    languages: ['English', 'Vietnamese', 'Japanese', 'Chinese'],
    currencies: ['VND', 'USD', 'AUD']
  },
  selectedLanguage: "English",
  selectedCurrency: "VND",
}

const headerReducers = (state = initState, action) => {
  switch(action.type) {
    case CHANGE_SELECTED_CURRENCY:
      return {...state, selectedCurrency: action.currency};
    default:
      return state;
  }
}

export default headerReducers;
