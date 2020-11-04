import { useState } from "react"
import TextField from '@material-ui/core/TextField';

export const useForm = (callback, initialState = {}, validate) => {

    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // if (validate) {
        //     callback();
        //     setValues(initialState);
        // } else {
        //     setErrors(validate(values))
        // }
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    }
}