import UserProfilePersonalInfo from '../../components/Profile/UserProfilePersonalInfo';
import React, { useEffect, useState } from 'react';
import userEndpoints from '../../requests/user-requests';
import axiosInstance from '../../requests/axios';
import swal from '@sweetalert/with-react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData, setUserPastContestsData } from '../../redux/actions/index'
import EmptyContent from '../../components/Contest/EmptyContent';
import PastContestsGrid from '../../components/Contest/PastContestsGrid';
import { Box, makeStyles } from '@material-ui/core';
import profileCover from '../../assets/images/profile_cover.jpg';

const ProfilePage = () => {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.userState);
    const [showHistory, setShowHistory] = useState(false);
    const [error, setError] = useState(null);
    const userPastContestsData = useSelector(state => state.userPastContestsState)
    const toggleShowHistory = () => {
        setShowHistory((prevState) => !prevState)
    }

    if (!userData) {
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
    }

    useEffect(() => {
        axiosInstance.get(userEndpoints.userPastContests)
            .then((response) => dispatch(setUserPastContestsData(response.data)))
            .catch((error) => setError(error))
    }, [dispatch]);

    const renderHistory = () => {
        if (error) {
            return (
                <EmptyContent />
            )
        } else {
            return (
                <PastContestsGrid contestsData={userPastContestsData} />
            )
        }
    }

    const useStyles = makeStyles((theme) => ({
        image: {
            [theme.breakpoints.up('md')]: {
                height: '500px',
                width: '100%',
                backgroundImage: `url(${profileCover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 0
            },
            [theme.breakpoints.down('sm')]: {
                height: '450px',
                width: '100%',
                backgroundImage: `url(${profileCover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 0
            }
        },
    }));

    const styles = useStyles();

    return (
        <>
            <Box className={styles.image} />
            {userData && <UserProfilePersonalInfo
                userData={userData}
                showHistory={showHistory}
                toggleShowHistory={toggleShowHistory} />}
            {showHistory ? (
                renderHistory()
            ) : (
                    null
                )}
        </>
    )
}

export default ProfilePage;