import { ADD_USER, DELETE_USER, EDIT_USER} from '../constants/UserActionTypes';

const initialState = [{
    text: 'Use Redux',
    marked: false,
    id: 0
}];

export default function todosReducers(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return [{
                id: (state.length === 0) ? 0 : state[0].id + 1,
                marked: false,
                text: action.text
            }, ...state];

        case DELETE_USER:
            return state.filter((todo) => todo.id !== action.id);

        case EDIT_USER:
            return state.map((todo) => todo.id === action.id ? { ...todo, text: action.text } : todo);

        default:
            return state;
    }
}
