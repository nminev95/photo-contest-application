import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SingleContestCard from './../Contest/SingleContestCard';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        display: 'flex',
    },
}));

const AllContestsBox = (props) => {

    const { contestsData } = props;
    console.log(contestsData)
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container spacing={4} className={classes.cardGrid} maxWidth="xlg">          
                {contestsData.map((contest) => <SingleContestCard contest={contest} key={contest.id} />)}
            </Grid>
        </React.Fragment>
    )
}

export default AllContestsBox;