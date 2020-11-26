import React from 'react';
import SingleContestCard from './SingleContestCard';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        display: 'flex',
    },
}));

const AllContestsBox = (props) => {
    
    const classes = useStyles();
    const { contestsData } = props;
   
    return (      
        <Container style={{marginTop:'70px', maxWidth: '1800px'}}>
            <Grid container  spacing={4} className={classes.cardGrid}  >
                {contestsData.map((contest) => <SingleContestCard contest={contest} key={contest.id} />)}
            </Grid>
        </Container>
    )
}

export default AllContestsBox;