import React, { useContext } from 'react';

import { useForm } from '../hooks/handleHook';

import { ListContext } from '../contexts/ListContext';

const AddTodo = () => {

    const { listState, dispatch } = useContext(ListContext);

    // TODO => pass submitFunction into useForm() below: useForm(submiFunction)
    const { fields, submit, handleChanges } = useForm(() => dispatch({ type: "ADD_TODO", payload: fields }));

    return(
        <>
            <form onSubmit={submit}>
                <input type="text" name='item' onChange={handleChanges} placeholder='Add a new task here' />
            </form>
        </>
    )
}

export default AddTodo;