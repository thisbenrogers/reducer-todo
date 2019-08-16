import React from 'react';

const Todo = props => {
    const dispatch = props.dispatch;
    const { completed, id, item } = props.props;


    return (
        <>
            <p className={completed ? 'completed': ''}>{item}</p>
        </>
    )
}

export default Todo;