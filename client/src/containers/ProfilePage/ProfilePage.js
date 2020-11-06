
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    upperContent: {
        backgroundColor: "#e0e0e0",
        padding: theme.spacing(15, 0, 6),

    },
    middleContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(0, 0, 6),
        borderRadius: 16,
    
    },
    bottomContent: {
        backgroundColor: "#e0e0e0",
        padding: theme.spacing(1, 0, 6),
    },
    Buttons: {
        marginTop: theme.spacing(4),
    },
    Icons: {
        marginTop: theme.spacing(4),
    },
    Avatar: {
        // padding: theme.spacing(6, 6, 6),
    }
}));


const ProfilePage = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main >
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
                <div className={classes.middleContent}>
                        <Grid container spacing={1} justify="center" style={{ fontSize: 50 }}>
                            <Avatar className={classes.Avatar} ></Avatar>
                        </Grid>
                    <Container maxWidth="md">

                        <Typography component="h6" variant="h4" align="center" color="textPrimary" gutterBottom>
                            Maria Velikova
                        </Typography>
                        <div>
                            <Grid container spacing={2} justify="center" >
                                <Grid item>
                                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                        Rank: Newbie
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                        Points: 2
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Let other people know more about you...
                        </Typography>
                        <div className={classes.Buttons}>
                            <Grid container spacing={2} justify="center" >
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Awards
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Contest history
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <div className={classes.bottomContent}>
                            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                Joined: Nov 5 2020
                            </Typography>
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
                            This is the place to show your bestwork. Take part in many contests, win a lot of awards and be proud of You!
                        </Typography>
                        <div className={classes.Buttons}>
                            <Grid container spacing={2} justify="center" >
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Update my profile
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    );
}

export default ProfilePage;