import AllContestsBox from '../../components/Contest/AllContestsBox';
import React, { useEffect, useState } from 'react';
import contestEndpoints from '../../requests/contest-requests';
import axiosInstance from '../../requests/axios';
import EmptyPageComponent from '../../components/Contest/EmptyPageComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setFinishedContestsData } from '../../redux/actions/index';

const FinishedContestsPage = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const contestsData = useSelector(state => state.finishedContestsState);

    useEffect(() => {
        axiosInstance.get(contestEndpoints.finishedContests)
            .then((response) => dispatch(setFinishedContestsData(response.data)))
            .catch((error) => setError(error))
    }, [dispatch]);

    return (
        <>
            { !error ? (               
                    <AllContestsBox contestsData={contestsData} />               
            ) : (                
                    <EmptyPageComponent />
                )
            }
        </>
    )
}

export default FinishedContestsPage;