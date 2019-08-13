import React, { useContext } from 'react';

import { TodoContext } from '../contexts/TodoContext';

const TodoList = () => {
    const { state, dispatch } = useContext(TodoContext);
    
    let arr = Object.values(state);

    return (
        <div>
            {arr.map(todo => {
                return (
                    <div key={todo.id} onClick={() => dispatch({ type: 'TOGGLE' })}>
                        <p className={todo.completed ? 'completed' : ''}>{todo.item}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList;