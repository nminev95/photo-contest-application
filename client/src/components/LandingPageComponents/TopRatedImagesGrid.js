import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SinglePhoto from './SinglePhoto';



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

}));

const TopRtaedImagesGrid = (props) => {

    const classes = useStyles();
    const { photosData } = props;

    return (
        <div>
            <Container style={{ marginTop: '50px' }} >
                <Box borderTop={3} borderBottom={3}>
                    <Typography className={classes.text} >
                        WINNING PHOTOS
                </Typography>
                    <Grid container spacing={5} className={classes.cardGrid} maxWidth="md" >
                        {photosData.map((photo) => <SinglePhoto photo={photo} key={photo.contest_id} />)}
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default TopRtaedImagesGrid;