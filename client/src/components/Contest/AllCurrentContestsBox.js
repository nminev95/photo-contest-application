import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SingleCurrentContestView from './SingleCurrentContestCard';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(18),
        display: 'flex',
    },
    text: {
        color: 'black',
        fontSize: '20px',
        fontFamily: '"Segoe UI"',
        fontWeight: '500',
        marginTop: '30px'
    },
}));

const AllCurrentContestsBox = ({ currentContestsData }) => {

    const classes = useStyles();

    return (
        <div>
            <div>
                <Typography
                    className={classes.text} >
                    <h1> Your current contests  </h1>
                </Typography>
            </div>
            <Divider
                variant="middle" />
            <Container
                style={{ marginTop: '15px' }}>
                <Grid
                    container 
                    spacing={4} 
                    className={classes.cardGrid} 
                    maxWidth="md">
                    {currentContestsData.map((contest) => <SingleCurrentContestView
                        contest={contest}
                        key={contest.id} />)}
                </Grid>
            </Container>
        </div>
    )
}


export default AllCurrentContestsBox;