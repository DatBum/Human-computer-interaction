import {CHANGE_SELECTED_CURRENCY} from '../constants/action-types';
import {SET_NEW_SUM} from '../constants/ActionTypes';

export const changeSelectedCurrency = (currency) => {
  return(
    {
      type: CHANGE_SELECTED_CURRENCY,
      currency
    }
  )
}

export const setNewSum =(sum) => {
  return(
    {
      type: SET_NEW_SUM,
      sum
    }
  )
}
