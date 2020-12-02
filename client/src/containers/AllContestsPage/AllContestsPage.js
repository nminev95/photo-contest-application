import AllContestsBox from './../../components/Contest/AllContestsBox';
import React, { useEffect, useState } from 'react';
import contestEndpoints from '../../requests/contest-requests';
import axiosInstance from '../../requests/axios';
import EmptyPageComponent from '../../components/Contest/EmptyPageComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setAllContestsData, setContestPhaseTwoData, setFinishedContestsData } from '../../redux/actions/index';
import swal from 'sweetalert';

const AllContestsPage = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const userRole = useSelector(state => state.loginState.user.role);
    const firstPhaseContests = useSelector(state => state.allContestState);
    const secondPhaseContests = useSelector(state => state.contestsPhaseTwoState);
    const finishedContests = useSelector(state => state.finishedContestsState);

    useEffect(() => {
        if (firstPhaseContests.length === 0) {
            axiosInstance.get(contestEndpoints.allContests)
            .then((response) => dispatch(setAllContestsData(response.data)))
            .catch((error) => setError(error));
        }
    }, [dispatch]);

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