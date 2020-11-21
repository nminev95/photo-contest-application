import UserProfilePersonalInfo from '../../components/Profile/UserProfilePersonalInfo';

import React, { useEffect } from 'react';
import userEndpoints from '../../requests/user-requests';
import axiosInstance from '../../requests/axios';
import swal from '@sweetalert/with-react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../redux/actions/index'


const ProfilePage = () => {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.userState);

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

    return (
        <React.Fragment>
            {userData && <UserProfilePersonalInfo userData={userData} />}
        </React.Fragment>
    )
}

export default ProfilePage;