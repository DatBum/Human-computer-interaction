import * as types from '../constants/InOutActionTypes';
import { callApi2 } from '../../utils/apiCaller';

const fetchInOutAction = (items) => {
    return {
        type: types.FETCH_INOUT,
        items
    };
}

export const actFetchInOutActionRequest = () => {
    return dispatch => {
        return callApi2('warehouses', 'GET', null).then(res => {
            let warehouses = res.data;
            var data = null;
            let result = [];
            if (warehouses.length > 0) {
                warehouses.map((warehouse) => {
                    result.push(warehouse.warehouseID);
                });
            }
            result.map((id) => {
                callApi2(`warehouses/${id}/InOut`, 'GET', null).then(
                    res => {
                        dispatch(fetchInOutAction(res.data));
                    }
                );
            });
        });
    };
}

const addInOutAction = (item) => {
    return {
        type: types.ADD_INOUT,
        item
    }
}

export const addInOut = (item) => {
    const { warehouseID } = item;
    return dispatch => {
        return callApi2(`warehouses/${warehouseID}/InOut`, 'POST', item).then(res => {
            dispatch(addInOutAction(res.data));
        });
    };
}

const updateInOutAction = (item) => {
    return {
        type: types.UPDATE_INOUT,
        item
    }
}

export const updateInOut = (item) => {
    const { warehouseID, InOutId } = item;
    return dispatch => {
        return callApi2(`warehouses/${warehouseID}/InOut/${InOutId}`, 'PUT', item).then(res => {
            dispatch(updateInOutAction(res.data));
        });
    };
}