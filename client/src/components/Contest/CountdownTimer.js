import React from 'react';
import Countdown from 'react-countdown';
import { useDispatch, useSelector } from 'react-redux';
import { setNextContestPhase } from '../../redux/actions';

const CountdownTimer = () => {
    const dispatch = useDispatch();
    const Completionist = () => <span>Loading...</span>;
    const contestInfo = useSelector(state => state.singleContestState);

    const setNextPhase = () => {
        dispatch(setNextContestPhase(contestInfo));
    };

    return (
        <Countdown
            date={Date.now() + 5000}
            onComplete={() => setNextPhase()}>
            <Completionist />
        </Countdown>
    )
}

export default CountdownTimer;