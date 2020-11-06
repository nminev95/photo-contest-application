import UserProfileBackgroundImage from '../../components/UserProfileBackgroundImage/UserProfileBackgroundImage';
import UserProfilePersonalInfo from '../../components/UserProfilePersonalInfo/UserProfilePersonalInfo';
import React, { useState, useEffect } from 'react';
import userEndpoints from '../../requests/user-requests';
import UserImages from '../../components/UserImages/UserImages';
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
                        text: "Looks like no information found.",
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