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
    const contestInfo = useSelector(state => state.singleContestState);
    const firstPhaseEndDate = new Date(contestInfo.firstPhaseLimit);
    const secondPhaseEndDate = new Date(contestInfo.secondPhaseLimit);
    const thirdPhaseEndDate = new Date();
    const Completionist = () => <span>Finished</span>;

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

    const renderCountdown = (phase) => {
        
        if (phase === 1) {
            return (
                < Countdown
                    date={firstPhaseEndDate}
                    onComplete={() => {
                        setNextContestPhase()
                    }}>
                </Countdown>
            )
        } else if (phase === 2) {
            return (
                < Countdown
                    autoStart={true}
                    date={secondPhaseEndDate}
                    onComplete={() => {
                        setNextContestPhase()
                    }}>
                </Countdown>
            )
        } else if (phase === 3) {
            return (
                < Countdown date={thirdPhaseEndDate} >
                    <Completionist />
                </Countdown>
            )
        }
    }

    return (
        <>
            {renderCountdown(contestInfo.phase_id)}
        </>
    )
}

export default CountdownTimer;