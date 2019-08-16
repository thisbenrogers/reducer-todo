import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { useForm } from '../hooks/handleHook';

const Todo = props => {
    const dispatch = props.dispatch;
    const { completed, id, item, isEditing } = props.props;

    const { fields, submit, handleChanges } = useForm(() => dispatch({ type: "UPDATE_TODO", payload: fields }));

    return (
    isEditing ? 
        <form onSubmit={submit}>
            <input type="text" name='item' onChange={handleChanges} value={item} />
        </form> :
        <div className='icon-container'>
            <div onClick={() => dispatch({ type: "TOGGLE_COMPLETED", payload: id })}>
                <p className={completed ? 'completed': ''}>{item}</p>
            </div>
            <FontAwesomeIcon onClick={() => dispatch({ type: "TOGGLE_EDITING", payload: id })} icon={faEdit} />
        </div>
    )
}

export default Todo;