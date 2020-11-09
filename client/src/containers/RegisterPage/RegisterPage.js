import React, { Fragment, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import swal from '@sweetalert/with-react';
import { useHistory } from 'react-router-dom';
import { emailError, firstNameError, lastNameError, passwordError, usernameError } from '../../validations/helper-errors';
import { VALIDATE_EMAIL_REGEX, VALIDATE_PASSWORD_REGEX } from '../../constants/constants';
import axios from '../../requests/axios';
import userEndpoints from '../../requests/user-requests';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 400,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 20, 8),
    },
}));

const RegisterPage = () => {

    const history = useHistory();
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
            error: usernameError,
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
            error: emailError,
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
            error: firstNameError,
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
            error: lastNameError,
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
            error: passwordError,
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
            error: passwordError,
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

        if (userData.password !== userData.passwordConfirm) {
            swal({
                title: "Oops!",
                text: "Looks like passwords don't match! Please try again.",
                icon: "error",
                button: "Okay"
            })
            return;
        }

        axios.post(userEndpoints.registerUser, userData)
            .catch((error) => {
                if (error.response.status === 409) {
                    swal({
                        title: "Oops!",
                        text: "Looks like the username you have entered is already taken! Please try a different one.",
                        icon: "error",
                        button: "Okay"
                    })
                }
            })
            .then((response) => {
                if (response) {
                    swal({
                        title: "Success!",
                        text: "Account created successfully! Click on the button to procced to login page.",
                        icon: "success",
                        button: "Proceed"
                    }).then(() => {
                        history.push('/users/login');
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

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            {renderView}
                        </Grid>
                        <Grid container justify="center">
                            < Grid item >
                                <Link
                                    component="button"
                                    onClick={() => {
                                        history.push('/users/login');
                                    }}> Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                        <Button className={classes.submit} type="submit" variant="contained" color="primary">Register</Button>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default RegisterPage;