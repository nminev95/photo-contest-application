import { setAllContestsData, setContestPhaseTwoData, setFinishedContestsData, setPrivateContests } from '../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import AllContestsBox from './../../components/Contest/AllContestsBox';
import contestEndpoints from '../../requests/contest-requests';
import axiosInstance from '../../requests/axios';
import EmptyPageComponent from '../../components/Contest/EmptyPageComponent';

const AllContestsPage = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const userRole = useSelector(state => state.loginState.user.role);
    const firstPhaseContests = useSelector(state => state.allContestState);
    const secondPhaseContests = useSelector(state => state.contestsPhaseTwoState);
    const finishedContests = useSelector(state => state.finishedContestsState);
    const privateContests = useSelector(state => state.privateContestsState);

    useEffect(() => {
        if (firstPhaseContests.length === 0) {
            axiosInstance.get(contestEndpoints.allContests)
                .then((response) => {
                    if (userRole === 'Organizer') {
                        dispatch(setAllContestsData(response.data))
                    } else {
                        const removedPrivateContests = response.data.filter((contest) => contest.restrictions_id === 1);
                        dispatch(setAllContestsData(removedPrivateContests))
                    }
                })
                .catch((error) => setError(error));
        }
    }, [dispatch]);

    useEffect(() => {
        if (privateContests.length === 0) {
            axiosInstance.get(contestEndpoints.getPrivateContests)
                .then((response) => dispatch(setPrivateContests(response.data)))
                .catch((error) => setError(error));
        }
    }, []);

    useEffect(() => {
        if (userRole === 'Organizer' && secondPhaseContests.length === 0) {
            axiosInstance.get(contestEndpoints.contestsPhaseTwo)
                .then((response) => dispatch(setContestPhaseTwoData(response.data)))
                .catch((error) => setError(error));
        }
    }, [dispatch]);

    useEffect(() => {
        if (userRole === 'Organizer' && finishedContests.length === 0) {
            axiosInstance.get(contestEndpoints.finishedContests)
                .then((response) => dispatch(setFinishedContestsData(response.data)))
                .catch((error) => setError(error));
        }
    }, [dispatch]);

    return (
        <>
            { !error ? (
                <AllContestsBox />
            ) : (
                    <EmptyPageComponent />
                )
            }
        </>
    )
}

export default AllContestsPage;