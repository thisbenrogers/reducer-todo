import uuid from 'uuid';

export const listReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                { id: uuid.v1(), item: action.payload.item, completed: false }
            ]
        default:
            return state;
    }
}