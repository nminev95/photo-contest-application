import React from 'react';
import Countdown from 'react-countdown';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { BASE_URL } from '../../constants/constants';
import { setContestDetails } from '../../redux/actions';
import axios from '../../requests/axios';
import contestEndpoints from '../../requests/contest-requests';

const CountdownTimer = () => {
    const dispatch = useDispatch();
    const Completionist = () => <span>Loading...</span>;
    const contestInfo = useSelector(state => state.singleContestState);

    const setNextContestPhase = () => {
        axios.put(`${BASE_URL}${contestEndpoints.singleContest}${+contestInfo.id}`)
            .catch((error) => {
                if (error.response.status === 401) {
                    swal({
                        title: "Oops!",
                        text: "Contest not found.",
                        icon: "error",
                        button: "Go back"
                    })
                }
            })
            .then((response) => dispatch(setContestDetails(response.data)))
    }

    return (
        <Countdown
            date={Date.now() + 5000}
            onComplete={() => {
                setNextContestPhase()
            }}>
            <Completionist />
        </Countdown>
    )
}

export default CountdownTimer;