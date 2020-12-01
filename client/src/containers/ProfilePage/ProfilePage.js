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
                backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/542e8709e4b0f766b2e91e0b/1547385658348-RTOMRMVYLMH0DS859D3M/ke17ZwdGBToddI8pDm48kLnfZvQ9iwxKU6eubAUQjId7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Uf479GMBNBfhHsrrjiU7oVFJ8_wlwITqu6jJqO9L0NwOoT__5iE7svB1u_pQDzoSaA/The+Brand+Photo+product+studio.jpg?format=2500w)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 0
            },
            [theme.breakpoints.down('sm')]: {
                height: '450px',
                width: '100%',
                backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/542e8709e4b0f766b2e91e0b/1547385658348-RTOMRMVYLMH0DS859D3M/ke17ZwdGBToddI8pDm48kLnfZvQ9iwxKU6eubAUQjId7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Uf479GMBNBfhHsrrjiU7oVFJ8_wlwITqu6jJqO9L0NwOoT__5iE7svB1u_pQDzoSaA/The+Brand+Photo+product+studio.jpg?format=2500w)`,
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
            {userData && <UserProfilePersonalInfo userData={userData} showHistory={showHistory} toggleShowHistory={toggleShowHistory} />}
            {showHistory ? (
                renderHistory()
            ) : (
                    null
                )}
        </>
    )
}

export default ProfilePage;