import React from 'react';

const Todo = props => {
    const dispatch = props.dispatch;
    const { completed, id, item } = props.props;


    return (
        <div onClick={() => dispatch({ type: "TOGGLE_COMPLETED", payload: id })}>
            <p className={completed ? 'completed': ''}>{item}</p>
        </div>
    )
}

export default Todo;