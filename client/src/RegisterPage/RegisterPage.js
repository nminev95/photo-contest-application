import React, { Fragment, useState } from 'react';
import { VALIDATE_EMAIL_REGEX, VALIDATE_PASSWORD_REGEX } from '../constants/constants';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 400,
        },
    },
}));

const RegisterPage = () => {

    const classes = useStyles();
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
        password: {
            name: 'password',
            label: 'Password',
            type: 'password',
            validators: {
                required: true,
                regex: VALIDATE_PASSWORD_REGEX,
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
                regex: VALIDATE_PASSWORD_REGEX,    // 8 characters, 1 letter, 1 number, 1 special char
            },
            valid: true,
            value: '',
        },
    });

    const handleChange = (ev) => {
        const { name, value } = ev.target;

        const copyControl = { ...form[name] };
        copyControl.value = value;
        copyControl.valid = true;

        if (copyControl.validators.required) {
            copyControl.valid = copyControl.valid && copyControl.value.length >= 1;
        }

        if (copyControl.validators.minLen) {
            copyControl.valid =
                copyControl.valid &&
                copyControl.value.length >= copyControl.validators.minLen;
        }

        if (copyControl.validators.maxLen) {
            copyControl.valid =
                copyControl.valid &&
                copyControl.value.length <= copyControl.validators.maxLen;
        }

        if (copyControl.validators.regex) {
            copyControl.valid =
                copyControl.valid &&
                copyControl.validators.regex.test(copyControl.value)
        }

        setForm({ ...form, [name]: copyControl });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const userData = Object.values(form).reduce((data, input) => {
            return { ...data, [input.name]: input.value };
        }, {});
    

    }

    const renderView = Object.values(form).map((input) => {

        return (
            <Fragment key={input.name}>
                <TextField
                    label={input.label}
                    name={input.name}
                    type={input.type}
                    value={input.value}
                    onChange={handleChange}
                    variant="outlined"
                />
                <br></br>
            </Fragment>
        )
    })


    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                {renderView}
                <Button variant="contained" color="primary">Register</Button>
            </form>
        </div>
    )
}

export default RegisterPage;