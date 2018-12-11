import {CHANGE_SELECTED_CURRENCY} from '../constants/action-types'

export const changeSelectedCurrency = (currency) => {
  return(
    {
      type: CHANGE_SELECTED_CURRENCY,
      currency
    }
  )
}
