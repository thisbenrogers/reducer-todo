import uuid from 'uuid';

export const initialState = {
    0: { item: 'STEP 1 - Build a simple reducer and initial state', completed: true, id: uuid.v1() },
    1: { item: 'STEP 2 - Set up state in your component', completed: false, id: uuid.v1() },
    2: { item: 'STEP 3 - Adding todos', completed: false, id: uuid.v1() },
    3: { item: 'STEP 4 - Toggle the completed field', completed: false, id: uuid.v1() },
    4: { item: 'STEP 5 - Clearing completed todos', completed: false, id: uuid.v1() }
};

export const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}