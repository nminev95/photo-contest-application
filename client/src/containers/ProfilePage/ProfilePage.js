import UserProfileBackgroundImage from '../../components/Profile/UserProfileBackgroundImage';
import UserProfilePersonalInfo from '../../components/Profile/UserProfilePersonalInfo';
import UserImages from '../../components/Profile/UserImages';
import React, { useState, useEffect } from 'react';
import userEndpoints from '../../requests/user-requests';
import axios from '../../requests/axios';
import swal from '@sweetalert/with-react';


const ProfilePage = () => {

    const [userData, setUserData] = useState(null);

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
            .then((response) => { setUserData(response.data) })
    }, []);

    return (
        <React.Fragment>
            < main>
                <div>
                    {userData && <UserProfileBackgroundImage />}
                    {userData && <UserProfilePersonalInfo userData={userData} />}
                    {userData && <UserImages />}
                </div>
            </main>
        </React.Fragment>
    )
}

export default ProfilePage;