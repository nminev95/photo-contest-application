import React from 'react';
import Countdown from 'react-countdown';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { BASE_URL } from '../../constants/constants';
import { setContestDetails } from '../../redux/actions';
import axios from '../../requests/axios';
import contestEndpoints from '../../requests/contest-requests';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    timer: {
        borderRadius: '10px',
        background: '#f50057',
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

const CountdownTimer = ({ contestData }) => {
    const dispatch = useDispatch();
    const firstPhaseEndDate = new Date(contestData.firstPhaseLimit);
    const secondPhaseEndDate = new Date(contestData.secondPhaseLimit);
    const thirdPhaseEndDate = new Date();
    const Completionist = () => <span>Finished</span>;
    const styles = useStyles();
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
                    renderer={props => (
                        <Grid container spacing={2} style={{ padding: '8px', justifyContent: 'center' }}>
                            <Grid item xl={3}>
                                <div className={styles.integers}>
                                    {props.days}
                                </div>
                                <div className={styles.text}>days</div>
                            </Grid>
                            <Grid item xl={3}>
                                <div className={styles.integers}>
                                    {props.hours}
                                </div>
                                <div className={styles.text}>hours</div>
                            </Grid>
                            <Grid item xl={3}>
                                <div className={styles.integers}>
                                    {props.minutes}
                                </div>
                                <div className={styles.text}>minutes</div>
                            </Grid>
                            <Grid item xl={3}>
                                <div className={styles.integers}>
                                    {props.seconds}
                                </div>
                                <div className={styles.text}>seconds</div>
                            </Grid>
                            {/* {props.hours} hours {props.minutes} minutes and {props.seconds} seconds left */}
                        </Grid>
                    )}
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
        <div className={styles.timer}>
            {renderCountdown(contestData.phase_id)}
        </div>
    )
}

export default CountdownTimer;