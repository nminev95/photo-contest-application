import React, { useState } from 'react';
import SingleContestCard from './SingleContestCard';
import Grid from '@material-ui/core/Grid';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import allContestsBackground from '../../assets/images/all_contests.jpg'
import FilterContestPhasesTabs from './FilterContestPhasesTabs';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        display: 'flex',
    },
    container: {
        marginTop: '60px',
        maxWidth: '1800px',
    },
    image: {
        [theme.breakpoints.up('md')]: {
            height: '500px',
            width: '100%',
            backgroundImage: `url(${allContestsBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0
        },
        [theme.breakpoints.down('sm')]: {
            height: '450px',
            width: '100%',
            backgroundImage: `url(${allContestsBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0
        }
    },
}));

const AllContestsBox = (props) => {

    const classes = useStyles();
    const { contestsData } = props;
    const [tabValue, setTabValue] = useState('Phase I');

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    return (
        <>
            <Box className={classes.image} />
            <FilterContestPhasesTabs tabValue={tabValue} handleTabChange={handleTabChange} />
            <Container
                className={classes.container} >
                <Grid
                    container
                    spacing={5}
                    className={classes.cardGrid}  >
                    {contestsData.map((contest) => <SingleContestCard
                        contest={contest}
                        key={contest.id} />)}
                </Grid>
            </Container>
        </>
    )
}

export default AllContestsBox;