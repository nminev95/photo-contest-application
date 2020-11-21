import React, { Fragment, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import swal from '@sweetalert/with-react';
import { passwordRequired, usernameRequired } from '../../validations/helper-errors';
import axiosInstance from '../../requests/axios';
import authEndpoints from '../../requests/auth-requests';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(http://wallarthd.com/wp-content/uploads/2014/08/Awesome-Black-And-White-Butterfly-Wallpaper-HD.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(3),
        backgroundColor: theme.palette.secondary.main,
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
}));

const LoginPage = () => {

    const history = useHistory();

    const dispatch = useDispatch()
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

        axiosInstance.post(authEndpoints.loginUser, userData)
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
                        localStorage.setItem("accessToken", response.data.accessToken);
                        dispatch(login(decode(response.data.accessToken)));
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
                        margin="normal"
                        required
                        fullWidth
                        autoFocus
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
                        margin="normal"
                        required
                        fullWidth
                        autoFocus
                    />
                    <br></br>
                </Fragment>
            )
        }
    })

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={5} md={8} className={classes.image} />
            <Grid item xs={12} sm={7} md={4} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid item >
                            {renderView}
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSubmit}
                        > Sign in
                        </Button>
                        <Grid container justify="flex-end" >
                            < Grid item  >
                                <Link
                                    component="button"
                                    onClick={() => {
                                        history.push('/users/register');
                                    }}>
                                    Do not have an account? Sign up
                            </Link>
                            </Grid>
                        </Grid>
                        <Grid container>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}

export default LoginPage;