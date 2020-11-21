import React, { useEffect, useState } from 'react';
import userEndpoints from '../../requests/user-requests';
import axiosInstance from '../../requests/axios';
import AllCurrentContestsBox from '../../components/Contest/AllCurrentContestsBox';
import EmptyPageComponent from '../../components/Contest/EmptyPageComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setUserCurrentContestsData } from '../../redux/actions/index';

const AllCurrentContestsPage = () => {

    const userCurrentContestsData = useSelector(state => state.userCurrentContestState);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        axiosInstance.get(userEndpoints.userCurrentContests)
            .then((response) => dispatch(setUserCurrentContestsData(response.data)))
            .catch((error) => setError(error))
    }, [dispatch]);

    return (
        <>
            {   !error ? (
                <React.Fragment>
                    {userCurrentContestsData && <AllCurrentContestsBox currentContestsData={userCurrentContestsData} />}
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <EmptyPageComponent />
                </React.Fragment>
                )}
        </>
    )
}

export default AllCurrentContestsPage;