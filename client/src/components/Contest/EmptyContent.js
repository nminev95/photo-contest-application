import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';


const useStyles = makeStyles((theme) => ({
    bottomContent: {
        backgroundColor: "#e0e0e0",
        padding: theme.spacing(1, 0, 6),
    },
    Buttons: {
        marginTop: theme.spacing(4),
    },
    Icons: {
        marginTop: theme.spacing(4),
        color: "grey",
    },
}));


const EmptyContent = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.bottomContent}>
            <Container maxWidth="md">
                <div>
                    <Grid container spacing={2} justify="center" >
                        <Grid item>
                            <ImageOutlinedIcon style={{ fontSize: 60 }}></ImageOutlinedIcon>
                        </Grid>
                        <Grid item>
                            <PhotoCameraOutlinedIcon style={{ fontSize: 100 }}></PhotoCameraOutlinedIcon>
                        </Grid>
                        <Grid item>
                            <ImageOutlinedIcon style={{ fontSize: 60 }}></ImageOutlinedIcon>
                        </Grid>
                    </Grid>
                </div>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Your profile is a bit empty!
                </Typography>
                <Typography variant="h7" align="center" color="textSecondary" paragraph>
                    This is the place to show your bestwork. Take part in many contests, win a lot of prizes and be proud of Yourself!
                        </Typography>
            </Container>
        </div>
    );
}

export default EmptyContent;