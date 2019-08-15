import uuid from 'uuid';

export const initialState = [
    {
        item: 'Build a simple reducer and initial state',
        completed: false,
        id: uuid.v1()
    },
    {
        item: 'Set Up State in Component',
        completed: false,
        id: uuid.v1()
    },
    {
        item: 'Adding Todos',
        completed: false,
        id: uuid.v1()
    },
    {
        item: 'Toggle Completed Field',
        completed: false,
        id: uuid.v1()
    },
    {
        item: 'Clearing Completed Todos',
        completed: false,
        id: uuid.v1()
    }
]

export const listReducer = (state, action) => {

}