import UserProfilePersonalInfo from '../../components/Profile/UserProfilePersonalInfo';
import React, { useEffect, useState } from 'react';
import userEndpoints from '../../requests/user-requests';
import axiosInstance from '../../requests/axios';
import swal from '@sweetalert/with-react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData, setUserPastContestsData } from '../../redux/actions/index'
import EmptyContent from '../../components/Contest/EmptyContent';
import PastContestsGrid from '../../components/Contest/PastContestsGrid';


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

    return (
        <React.Fragment>
            {userData && <UserProfilePersonalInfo userData={userData} showHistory={showHistory} toggleShowHistory={toggleShowHistory} />}
            {showHistory ?
                (renderHistory()) 
            : (null)}
        </React.Fragment>
    )
}

export default ProfilePage;