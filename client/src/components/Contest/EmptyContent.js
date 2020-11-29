import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.up('sm')]: {
            width: '50%',
            height: '330px',
            backgroundColor: "white",
            borderRadius: "10px",
            marginTop: '3em',
            marginBottom: '5em',
            boxShadow: '0 1px 3px rgba(0,0,0,0.20), 0 1px 2px rgba(0,0,0,0.24)',
            zIndex: 1,
        },
        [theme.breakpoints.only('xs')]: {
            width: '100%',
            height: '330px',
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            marginTop: '3em',
            marginBottom: '5em',
            zIndex: 1,
        }
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
        color: "grey",
    },
}));


const EmptyContent = () => {

    const classes = useStyles();

    return (
        <div
            style={{ display: "flex", justifyContent: 'center', position: "relative" }}>
            <Box
                className={classes.container}
                justify="center" >
                <Container
                    maxwidth="md">
                    <div
                        style={{ display: "flex", justifyContent: 'center', marginTop: "70px" }}>
                        <Grid
                            container
                            spacing={2}
                            justify="center" >
                            <Grid
                                item>
                                <ImageOutlinedIcon
                                    style={{ fontSize: 60 }}>
                                </ImageOutlinedIcon>
                            </Grid>
                            <Grid
                                item>
                                <PhotoCameraOutlinedIcon
                                    style={{ fontSize: 100 }}>
                                </PhotoCameraOutlinedIcon>
                            </Grid>
                            <Grid item>
                                <ImageOutlinedIcon
                                    style={{ fontSize: 60 }}>
                                </ImageOutlinedIcon>
                            </Grid>
                        </Grid>
                    </div>
                    <Typography
                        variant="h6"
                        align="center"
                        color="textSecondary"
                        paragraph
                    >
                        Your profile is a bit empty!
                    </Typography>
                    <Typography
                        variant="h7"
                        align="center"
                        color="textSecondary"
                        paragraph>
                        This is the place to show your bestwork. Take part in many contests, win a lot of prizes and be proud of Yourself!
                        </Typography>
                </Container>
            </Box>
        </div>
    );
}

export default EmptyContent;