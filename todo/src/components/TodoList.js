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
            <AddTodo />
            <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>clear completed</button>
        </>
    )
}

export default TodoList;