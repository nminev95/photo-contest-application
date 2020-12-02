import React, { useState } from 'react';
import SingleContestCard from './SingleContestCard';
import Grid from '@material-ui/core/Grid';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import allContestsBackground from '../../assets/images/all_contests.jpg'
import FilterContestPhasesTabs from './FilterContestPhasesTabs';
import { useSelector } from 'react-redux';
import FilterPublicPrivateContestsTabs from './FilterPublicPrivateContestsTabs';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        display: 'flex',
    },
    container: {
        marginTop: '40px',
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

const AllContestsBox = () => {

    const classes = useStyles();
    const [phasesTabValue, setPhasesTabValue] = useState('Phase I');
    const [restrictionsTabValue, setRestrictionsTabValue] = useState('Open contests');
    const firstPhaseContests = useSelector(state => state.allContestState);
    const secondPhaseContests = useSelector(state => state.contestsPhaseTwoState);
    const finishedContests = useSelector(state => state.finishedContestsState);
    const privateContests = useSelector(state => state.privateContestsState);
    const userRole = useSelector(state => state.loginState.user.role);

    const handlePhasesTabChange = (event, newValue) => {
        setPhasesTabValue(newValue);
    };

    const handleRestrictionsTabChange = (event, newValue) => {
        setRestrictionsTabValue(newValue);
    };

    const renderContests = (value) => {
        switch (true) {
            case (firstPhaseContests && value === 'Phase I'):
                return (
                    <Grid
                        container
                        spacing={5}
                        className={classes.cardGrid}  >
                        {firstPhaseContests.map((contest) => <SingleContestCard
                            contest={contest}
                            key={contest.id} />)}
                    </Grid>
                )
            case (secondPhaseContests && value === 'Phase II'):
                return (
                    <Grid
                        container
                        spacing={5}
                        className={classes.cardGrid}  >
                        {secondPhaseContests.map((contest) => <SingleContestCard
                            contest={contest}
                            key={contest.id} />)}
                    </Grid>
                )
            default:
                if (finishedContests) {
                    return (
                        <Grid
                            container
                            spacing={5}
                            className={classes.cardGrid}  >
                            {finishedContests.map((contest) => <SingleContestCard
                                contest={contest}
                                key={contest.id} />)}
                        </Grid>
                    )
                }
        }
    }

    return (
        <>
            <Box className={classes.image} />
            {userRole && userRole === 'Organizer' ? (
                <>
                    <FilterContestPhasesTabs tabValue={phasesTabValue} handleTabChange={handlePhasesTabChange} />
                    <Container
                        className={classes.container} >
                        {renderContests(phasesTabValue)}
                    </Container>
                </>
            ) : (
                    <>
                        <FilterPublicPrivateContestsTabs
                            tabValue={restrictionsTabValue}
                            handleTabChange={handleRestrictionsTabChange} />
                        <Container
                            className={classes.container} >
                            {restrictionsTabValue === 'Open contests' ? (
                                <Grid
                                    container
                                    spacing={5}
                                    className={classes.cardGrid}  >
                                    {firstPhaseContests.map((contest) => <SingleContestCard
                                        contest={contest}
                                        key={contest.id} />)}
                                </Grid>
                            ) : (<Grid
                                container
                                spacing={5}
                                className={classes.cardGrid}  >
                                {privateContests.map((contest) => <SingleContestCard
                                    contest={contest}
                                    key={contest.id} />)}
                            </Grid>)}
                        </Container>
                    </>
                )}
        </>
    )
}

export default AllContestsBox;