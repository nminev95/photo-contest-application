import React from 'react';
import SingleContestCard from './SingleContestCard';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';


const AllContestsBox = (props) => {

    const { contestsData } = props;
   
    return (      
        <Container style={{marginTop:'70px'}}>
            <Grid container  spacing={4} >
                {contestsData.map((contest) => <SingleContestCard contest={contest} key={contest.id} />)}
            </Grid>
            </Container>
    )
}

export default AllContestsBox;