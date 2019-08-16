import uuid from 'uuid';

export const listReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                { id: uuid.v1(), item: action.payload.item, completed: false }
            ];
        case "TOGGLE_COMPLETED":
            state.forEach(todo => {
                todo.id === action.payload && (todo.completed = !todo.completed)
            })
            return [...state];
        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.completed);
        case "TOGGLE_EDITING":
            state.forEach(todo => {
                todo.id === action.payload && (todo.isEditing = !todo.isEditing)
            })
            return [...state];
        case "UPDATE_TODO":
            state.map(todo => {
                if (todo.isEditing) {
                    todo.item = action.payload.item;
                    todo.isEditing = !todo.isEditing;
                }
            })
            return [...state];
        default:
            return state;
    }
}