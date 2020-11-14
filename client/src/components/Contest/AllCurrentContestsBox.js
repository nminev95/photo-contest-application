import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SingleCurrentContestView from './SingleCurrentContestCard';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        display: 'flex',
    },
}));

const AllCurrentContestsBox = ({ currentContestsData }) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container spacing={4} className={classes.cardGrid} maxWidth="xlg">          
             { currentContestsData.map((contest) => <SingleCurrentContestView contest={contest} key={contest.id} />)}
            </Grid>
        </React.Fragment>
    )
}

export default AllCurrentContestsBox;