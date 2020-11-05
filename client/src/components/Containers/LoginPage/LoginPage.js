import React, { Fragment, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import swal from '@sweetalert/with-react';
import { passwordRequired, usernameRequired } from '../../../validations/helper-errors';
import axios from '../../../requests/axios';
import userEndpoints from '../../../requests/user-requests';
import { useAuth } from '../../../custom-hooks/useAuth';
import decode from 'jwt-decode';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 400,
        },
    },
}));

const LoginPage = () => {

    const { setLoginState } = useAuth();
    const classes = useStyles();
    const [form, setForm] = useState({
        username: {
            name: 'username',
            label: 'Username',
            type: 'text',
            validators: {
                required: true,
            },
            error: usernameRequired,
            valid: true,
            value: '',
        },
        password: {
            name: 'password',
            label: 'Password',
            type: 'password',
            validators: {
                required: true,
            },
            error: passwordRequired,
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

        axios.post(userEndpoints.loginUser, userData)
            .catch((error) => {
                if (error.response.status === 401) {
                    swal({
                        title: "Oops!",
                        text: "Looks like the entered username/password combination is invalid.",
                        icon: "error",
                        button: "Try again"
                    })
                }
            })
            .then((response) => {
                if (response) {
                    swal({
                        title: "Success!",
                        text: "You have logged in successfully.",
                        icon: "success",
                        button: false,
                        timer: 1500
                    }).then(() => {
                        localStorage.setItem("token", response.data.token);
                        const user = decode(response.data.token);
                        setLoginState({ isLoggedIn: true, user: user });
                    });

                }
            })
    }

    const renderView = Object.values(form).map((input) => {
        if (input.valid) {
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
        } else {
            return (
                <Fragment key={input.name}>
                    <TextField
                        label={input.label}
                        name={input.name}
                        type={input.type}
                        value={input.value}
                        onChange={handleChange}
                        variant="outlined"
                        helperText={input.error}
                        error
                    />
                    <br></br>
                </Fragment>
            )
        }
    })

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                {renderView}
                <Button type="submit" variant="contained" color="primary">Login</Button>
            </form>
        </div>
    )
}

export default LoginPage;