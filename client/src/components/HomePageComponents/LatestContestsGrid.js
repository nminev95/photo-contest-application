import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import SingleCurrentContestCard from '../Contest/SingleCurrentContestCard';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

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


const LatestContestsGrid = (props) => {

    const { contestsData } = props;
    const latestContests = contestsData.slice().reverse();
    const lastSixContests = latestContests.slice(0, 4);
    const classes = useStyles();

    return (

        <Container style={{ marginTop: '50px' }} >
            <Box borderTop={3} borderBottom={3}>
                <Typography className={classes.text} >
                   Latest contests
            </Typography>
                <Grid container spacing={4} className={classes.cardGrid}  >
                    { lastSixContests.map((contest, i) => <SingleCurrentContestCard key={i} contest={contest} />)}
                </Grid>
            </Box>
        </Container>     
    )
}

export default LatestContestsGrid;