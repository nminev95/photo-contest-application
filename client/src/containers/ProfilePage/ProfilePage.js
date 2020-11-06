import React, { useState, useEffect } from 'react';
import userEndpoints from '../../requests/user-requests';
import Profile from './../../components/Profile/Profile';
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
        console.log(userData)

    }, []);

    return (
        <div>
            { userData && <Profile userData={userData} />}
        </div>
    )
}

export default ProfilePage;