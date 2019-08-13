import React from 'react';

const Todo = props => {
    console.log("props in todo: ", props);

    const { completed, id, item } = props.props;
    return (
        <p className={completed ? 'completed' : ''}>{item}</p>
    )
}

export default Todo;