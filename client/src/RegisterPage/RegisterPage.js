import React, { useState } from 'react';
import { VALIDATE_EMAIL_REGEX } from '../../constants/constants';
// import { useForm } from "../../custom-hooks/useForm";

const RegisterPage = () => {

    const [form, setForm] = useState({
        username: {
            name: 'username',
            label: 'Username',
            type: 'text',
            validators: {
                required: true,
                minLen: 6,
                maxLen: 30,
            },
            valid: true,
            value: '',
        },
        email: {
            name: 'email',
            label: 'Email',
            type: 'email',
            validators: {
                required: true,
                regex: VALIDATE_EMAIL_REGEX,
            },
            valid: true,
            value: '',
        },
        password: {
            name: 'password',
            label: 'Password',
            type: 'password',
            validators: {
                required: true,
                minLen: 8,
                maxLen: 40
            },
            valid: true,
            value: '',
        },
        passwordConfirm: {
            name: 'passwordConfirm',
            label: 'Confirm password',
            type: 'password',
            validators: {
                required: true,
                minLen: 8,
                maxLen: 40,
            },
            valid: true,
            value: '',
        },
        firstName: {
            name: 'firstName',
            label: 'First name',
            type: 'text',
            validators: {
                required: true,
                minLen: 2,
                maxLen: 30,
            },
            valid: true,
            value: '',
        },
        lastName: {
            name: 'lastName',
            label: 'Last name',
            type: 'text',
            validators: {
                required: true,
                minLen: 2,
                maxLen: 30,
            },
            valid: true,
            value: '',
        },
    });



    return (
        <div>

        </div>
    )
}

export default RegisterPage;