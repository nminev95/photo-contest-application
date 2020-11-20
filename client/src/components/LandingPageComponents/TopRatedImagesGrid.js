import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles((theme) => ({
    root: {
        borderBottom: '10px',
        borderTop: '10px',
        marginBottom: '10px',
    },

    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
        display: 'flex',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: '25px',
        fontFamily: '"Segoe UI"',
        fontWeight: '500',
        marginTop: '10px'
    },
    imageDiv: {
        position: 'relative',
        width: '100%',
        transition: '0.5s all ease-in-out',
    },
    image: {
        width: 'auto',
        height: '180px',
        marginTop: '25px',
        transition: '0.5s all ease-in-out',
        '&:hover': {
            opacity: '0.8',
            transform: 'scale(1.1)',
            cursor: 'pointer'
        }
    },
}));

const TopRtaedImagesGrid = () => {

    const classes = useStyles();

    return (
        <div>
            <Container style={{ marginTop: '50px' }} >
                <Box borderTop={3} borderBottom={3}>
                    <Typography className={classes.text} >
                        WINNING PHOTOS
                </Typography>
                    <Grid container spacing={5} className={classes.cardGrid} maxWidth="md" >
                        <Grid item xs={12} sm={6} md={4} lg={3}  >
                            <img
                                className={classes.image}
                                alt={"hello"}
                                src={`http://localhost:4000/public/entries/thumbnails/thumbnail-1605388351957_458438615.jpg`}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}   >
                            <img
                                className={classes.image}
                                alt={"hello"}
                                src={`http://localhost:4000/public/entries/thumbnails/thumbnail-1605388351957_458438615.jpg`}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}   >
                            <img
                                className={classes.image}
                                alt={"hello"}
                                src={`http://localhost:4000/public/entries/thumbnails/thumbnail-1605388351957_458438615.jpg`}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default TopRtaedImagesGrid;