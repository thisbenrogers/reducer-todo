import React, { useContext } from 'react';

import { TodoContext } from '../contexts/TodoContext';

import Todo from './Todo';

const TodoList = () => {
    const { state, dispatch } = useContext(TodoContext);
    
    let arr = Object.values(state);

    return (
        <div>
            {arr.map(todo => {
                return <Todo key={todo.id} props={todo} />
            })}
        </div>
    )
}

export default TodoList;