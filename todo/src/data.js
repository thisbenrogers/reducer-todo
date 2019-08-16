import uuid from 'uuid';

export const initialState = [
    {
        item: 'Build a simple reducer and initial state',
        completed: false,
        isEditing: false,
        id: uuid.v1()
    },
    {
        item: 'Set Up State in Component',
        completed: false,
        isEditing: false,
        id: uuid.v1()
    },
    {
        item: 'Adding Todos',
        completed: false,
        isEditing: false,
        id: uuid.v1()
    },
    {
        item: 'Toggle Completed Field',
        completed: false,
        isEditing: false,
        id: uuid.v1()
    },
    {
        item: 'Clearing Completed Todos',
        completed: false,
        isEditing: false,
        id: uuid.v1()
    }
]