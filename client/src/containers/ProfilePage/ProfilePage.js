import UserProfileBackgroundImage from '../../components/Profile/UserProfileBackgroundImage';
import UserProfilePersonalInfo from '../../components/Profile/UserProfilePersonalInfo';
import UserImages from '../../components/Profile/UserImages';
import React, { useEffect } from 'react';
import userEndpoints from '../../requests/user-requests';
import axios from '../../requests/axios';
import swal from '@sweetalert/with-react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../redux/actions/index'


const ProfilePage = () => {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.userState);

    useEffect(() => {
        axios.get(userEndpoints.userProfile)
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
            .then((response) => dispatch(setUserData(response.data)))
    }, [dispatch]);

    return (
        <React.Fragment>
            < main>
                <div>
                    {userData && <UserProfileBackgroundImage />}
                    {userData && <UserProfilePersonalInfo userData={userData} />}
                    {userData && <UserImages userData={userData} />}
                </div>
            </main>
        </React.Fragment>
    )
}

export default ProfilePage;