import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    upperContent: {
        backgroundColor: "#e0e0e0",
        padding: theme.spacing(15, 0, 6),
    },

}));


const UserProfileBackgroundImage = () => {

    const classes = useStyles();

    return (
        <div className={classes.upperContent} maxWidth="sm">
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                </Typography>
                <div className={classes.Buttons}>
                    <Grid container spacing={2} justify="center">
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default UserProfileBackgroundImage;