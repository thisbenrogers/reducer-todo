import React, { useContext } from 'react';

import AddTodo from './AddTodoForm';

import { ListContext } from '../contexts/ListContext';

const TodoList = () => {
    const { listState, dispatch } = useContext(ListContext);

    return (
        <>
            {listState.map(todo => {
                return <p>{todo.item}</p>
            })}
            <AddTodo />
        </>
    )
}

export default TodoList;