import AllContestsBox from './../../components/Contest/AllContestsBox';
import React, { useEffect, useState } from 'react';
import contestEndpoints from '../../requests/contest-requests';
import axiosInstance from '../../requests/axios';
import EmptyPageComponent from '../../components/Contest/EmptyPageComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setAllContestsData } from '../../redux/actions/index';

const AllContestsPage = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const contestsData = useSelector(state => state.allContestState);

    useEffect(() => {
        axiosInstance.get(contestEndpoints.allContests)
            .then((response) => dispatch(setAllContestsData(response.data)))
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

export default AllContestsPage;