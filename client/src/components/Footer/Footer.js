
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const Copyright = () => {
    return (
        <React.Fragment>
            <Typography 
            variant="body2" 
            color="textPrimary" 
            align="center">
                Telerik Academy - Team 5
            </Typography>
            <Typography 
            variant="body2" 
            color="textSecondary" 
            align="center">
                {'Copyright © '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </React.Fragment>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#f5f5f5",
        padding: theme.spacing(4),
    },
    text: {
        color: 'white',
    }
}));

const Footer = () => {

    const userState = useSelector(state => state.loginState);
    const classes = useStyles();

    return (
        <>
            { !userState.isLogged ? (
                <footer 
                className={classes.footer}>
                    <div 
                    className={classes.text}>
                    <Copyright />
                    </div>
                </footer>
            ) : (
                null
                )
            }
        </>
    )
}

export default Footer;