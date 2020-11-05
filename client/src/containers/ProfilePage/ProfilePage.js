
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { positions } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0.50,
        
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const ProfilePage = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}></Paper>
                </Grid>
               
            </Grid>
        </div>
    );
}

export default ProfilePage;