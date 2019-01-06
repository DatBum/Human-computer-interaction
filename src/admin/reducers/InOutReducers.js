import * as types from '../constants/InOutActionTypes';

const initialState = [];

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}

export default function InOutReducers(state = initialState, action) {
    var index = -1;
    switch (action.type) {
        case types.FETCH_INOUT:
            return [...state, action.items];

        case types.ADD_INOUT:
            state.map((InOut) => {
                if (findIndex(InOut, action.item.warehouseID) !== -1){
                    InOut.push(action.item);
                }
            });
            return [...state];
        
        case types.UPDATE_INOUT:
            state.map((InOut) => {
                index = findIndex(InOut, action.item.InOutId);
                if (index !== -1){
                    InOut[index] = action.item;
                }
            });
            return [...state];

        default:
            return [...state];
    }
}
