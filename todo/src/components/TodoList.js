import React, { useContext } from 'react';

import Todo from './Todo';
import AddTodo from './AddTodoForm';

import { ListContext } from '../contexts/ListContext';

const TodoList = () => {
    const { listState, dispatch } = useContext(ListContext);

    return (
        <>
            {listState.map((todo, index) => {
                return <Todo key={index} props={ todo} dispatch={dispatch} />
            })}
            <AddTodo dispatch={dispatch} />
        </>
    )
}

export default TodoList;