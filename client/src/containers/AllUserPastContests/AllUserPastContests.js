import React, { useEffect, useState } from 'react';
import userEndpoints from '../../requests/user-requests';
import axios from '../../requests/axios';
import UserProfilePersonalInfo from '../../components/Profile/UserProfilePersonalInfo';
import EmptyContent from '../../components/Contest/EmptyContent'
import { useDispatch, useSelector } from 'react-redux';
import { setUserPastContestsData } from '../../redux/actions/index';

const AllUserPastContests = (props) => {

    // const userState = useSelector(state => state.loginState);
    // const id = userState.user.sub;
    const userPastContestsData = useSelector(state => state.userPastContestsState);
    const userData = useSelector(state => state.userState);
    const [error, setError] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(userEndpoints.userPastContests)
            .then((response) => dispatch(setUserPastContestsData(response.data)))
            .catch((error) => setError(error))
    }, [dispatch]);

    return (
        <>
            {   !error ? (
                <React.Fragment>
                    {userData && <UserProfilePersonalInfo userData={userData} />}
                </React.Fragment>
            ) : (
                    <React.Fragment>
                        {userData && <UserProfilePersonalInfo userData={userData} />}
                        <EmptyContent />
                    </React.Fragment>
                )}
        </>
    )
}

export default AllUserPastContests;



