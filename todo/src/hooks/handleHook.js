import { useState } from 'react';

export const useForm = cb => {
    const [fields, setFields] = useState({});

    const submit = e => {
        e.preventDefault();
        cb(fields);
    }

    const handleChanges = e => {
        e.preventDefault();
        setFields({ ...fields, [e.target.name]: e.target.value });
        console.log("fileds in handleChanges: ", fields);
    }

    return {
        handleChanges,
        submit,
        fields
    }
}