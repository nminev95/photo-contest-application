
import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { AuthContext } from '../../context/AuthContext';
import { makeStyles } from '@material-ui/core/styles';


const Copyright = () => {
    return (
        <React.Fragment>
            <Typography variant="body2" color="textSecondary" align="center">
                Telerik Academy - Team 5
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </React.Fragment>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "grey",
        color: "white",
        padding: theme.spacing(6),
    },
}));

const Footer = () => {

    const { isLoggedIn } = useContext(AuthContext);
    const classes = useStyles();
 
    return (
        <>
            { !isLoggedIn ? 
                (<footer className={classes.footer}>
                    <Copyright />
                </footer> ) :            
            null
            }
        </>
    )
}

export default Footer;