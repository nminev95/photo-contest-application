import React from 'react';
import Countdown from 'react-countdown';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { BASE_URL } from '../../constants/constants';
import { setContestDetails } from '../../redux/actions';
import axios from '../../requests/axios';
import contestEndpoints from '../../requests/contest-requests';

const CountdownTimer = ({ contestData }) => {
    const dispatch = useDispatch();
    const firstPhaseEndDate = new Date(contestData.firstPhaseLimit);
    const secondPhaseEndDate = new Date(contestData.secondPhaseLimit);
    const thirdPhaseEndDate = new Date();
    const Completionist = () => <span>Finished</span>;

    const setNextContestPhase = () => {
        axios.put(`${BASE_URL}${contestEndpoints.singleContest}${+contestData.id}`)
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
        //switch
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
                    <Completionist/>
                </Countdown>
            )
        }
    }

    return (
        <>
            {renderCountdown(contestData.phase_id)}
        </>
    )
}

export default CountdownTimer;