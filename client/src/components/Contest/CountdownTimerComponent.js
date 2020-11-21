import React from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { BASE_URL } from '../../constants/constants';
import { setContestDetails } from '../../redux/actions';
import axiosInstance from '../../requests/axios';
import contestEndpoints from '../../requests/contest-requests';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import FullsizeTimer from './FullsizeTimer';
import SmallTimer from './SmallTimer';

const useStyles = makeStyles((theme) => ({
    timer: {
        borderRadius: '10px',
        // background: '#f50057',
        color: 'white'
    },
    integers: {
        fontSize: '30px',
        lineHeight: 'normal'
    },
    text: {
        fontSize: '12px'
    }
}))

const CountdownTimerComponent = ({ contestData }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const firstPhaseEndDate = new Date(contestData.firstPhaseLimit);
    const secondPhaseEndDate = new Date(contestData.secondPhaseLimit);
    const thirdPhaseEndDate = new Date();
    const styles = useStyles();
    const setNextContestPhase = () => {
        axiosInstance.put(`${BASE_URL}${contestEndpoints.singleContest}${+contestData.id}`)
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
        switch (true) {
            case phase === 1 && location.pathname.includes('users'):
                return (
                    <SmallTimer endDate={firstPhaseEndDate} setNextPhase={setNextContestPhase}/>
                );
            case phase === 2 && location.pathname.includes('users'):
                return (
                    <SmallTimer endDate={secondPhaseEndDate} setNextPhase={setNextContestPhase}/>
                );
            case phase === 3 && location.pathname.includes('users'):
                return (
                    <SmallTimer endDate={thirdPhaseEndDate} setNextPhase={setNextContestPhase}/>
                );
            case phase === 1:
                return (
                    <FullsizeTimer endDate={firstPhaseEndDate} setNextPhase={setNextContestPhase} />
                )
            case phase === 2:
                return (
                    <FullsizeTimer endDate={secondPhaseEndDate} setNextPhase={setNextContestPhase} />
                )
            case phase === 3:
                return (
                    <FullsizeTimer endDate={thirdPhaseEndDate} setNextPhase={setNextContestPhase} />
                )
            default:
                return;
        }
    }

    return (
        <div className={styles.timer}>
            {renderCountdown(contestData.phase_id)}
        </div>
    )
}

export default CountdownTimerComponent;