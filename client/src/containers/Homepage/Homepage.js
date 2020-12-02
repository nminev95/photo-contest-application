import React, { useEffect } from 'react';
import LatestContestsGrid from '../../components/HomePageComponents/LatestContestsGrid';
import TextBox from '../../components/HomePageComponents/TextBox';
import contestEndpoints from '../../requests/contest-requests';
import axiosInstance from '../../requests/axios';
import swal from '@sweetalert/with-react';
import { useDispatch, useSelector } from 'react-redux';
import { setRecentlyExpContestsData, setUserData, setUsersRankingsData } from '../../redux/actions/index';
import userEndpoints from '../../requests/user-requests';
import { Box, Grid, makeStyles } from '@material-ui/core';
import TopPerformersRanking from '../../components/Users/TopPerformersRanking';
import homeCover from '../../assets/images/home-organizer.jpg';

const useStyles = makeStyles((theme) => ({
    image: {
        [theme.breakpoints.up('md')]: {
            height: '500px',
            width: '100%',
            backgroundImage: `url(${homeCover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0
        },
        [theme.breakpoints.down('sm')]: {
            height: '450px',
            width: '100%',
            backgroundImage: `url(${homeCover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0
        }
    },
}));

const HomePage = () => {

    const styles = useStyles()
    const dispatch = useDispatch();
    const contestsData = useSelector(state => state.recentlyExpContestState);
    const userRole = useSelector(state => state.loginState.user.role);
    const usersRankingsData = useSelector(state => state.usersRankingsState);

    useEffect(() => {
        if (userRole && userRole === 'Photo Junkie') {
            axiosInstance.get(contestEndpoints.recentlyExpContests)
                .catch((error) => {
                    if (error.response.status === 404) {
                        swal({
                            title: "Oops!",
                            text: "Looks like no information found!",
                            icon: "error",
                            button: "Okay"
                        })
                    }
                })
                .then((response) => dispatch(setRecentlyExpContestsData(response.data)))
        }
    }, [dispatch, contestsData.length]);

    useEffect(() => {
        if (userRole && userRole === 'Organizer') {
            axiosInstance.get(contestEndpoints.recentlyExpSecondPhaseContests)
                .catch((error) => {
                    if (error.response.status === 404) {
                        swal({
                            title: "Oops!",
                            text: "Looks like no information found!",
                            icon: "error",
                            button: "Okay"
                        })
                    }
                })
                .then((response) => dispatch(setRecentlyExpContestsData(response.data)))
        }
    }, [dispatch]);

    useEffect(() => {
        axiosInstance.get(userEndpoints.userProfile)
            .then((response) => dispatch(setUserData(response.data)))
            .catch((error) => {
                if (error.response.status === 404) {
                    swal({
                        title: "Oops!",
                        text: "Looks like no information found!",
                        icon: "error",
                        button: "Okay"
                    })
                }
            })
    }, [dispatch]);

    useEffect(() => {
        if (userRole && userRole === 'Organizer') {
            axiosInstance.get(userEndpoints.getUsersRankings)
                .catch((error) => {
                    if (error.response.status === 404) {
                        swal({
                            title: "Oops!",
                            text: "Looks like no information found!",
                            icon: "error",
                            button: "Okay"
                        })
                    }
                })
                .then((response) => dispatch(setUsersRankingsData(response.data)))
        }
    }, [dispatch]);

    return (
        <>
            {userRole && userRole === 'Photo Junkie' ? (
                <>
                    <LatestContestsGrid
                        contestsData={contestsData}
                        text={'Last chance to take part in...'} />
                    <TextBox />
                </>
            ) : (
                    <>
                        <Box
                            className={styles.image} />
                        <Grid
                            container >
                            <Grid
                                lg={8}
                                md={12}
                                sm={12}
                                item>
                                <LatestContestsGrid
                                    contestsData={contestsData}
                                    text={'Hurry up and give your vote if you haven\'t...'} />
                            </Grid>
                            <Grid
                                lg={4}
                                md={12}
                                sm={12}
                                item>
                                <TopPerformersRanking
                                    usersData={usersRankingsData.slice(0, 5)} />
                            </Grid>
                        </Grid>
                    </>
                )}
        </>
    )
}

export default HomePage;