import React from 'react';

const Todo = props => {
    const dispatch = props.dispatch;
    const { completed, id, item, } = props.props;
    return (
        <>
        <p className={completed ? 'completed' : ''}>{item}</p><button onClick={() => dispatch({ type: 'TOGGLE' })}>X</button>
        </>
    )
}

export default Todo;