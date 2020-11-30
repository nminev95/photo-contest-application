import { Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Countdown from "react-countdown";

const useStyles = makeStyles((theme) => ({
    timer: {
        borderRadius: '10px',
        background: '#f50057',
        color: 'white'
    },
    integers: {
        fontSize: '22px',
        lineHeight: 'normal',
    },
    text: {
        fontSize: '12px',
    }
}))

const FullsizeTimer = ({ endDate, setNextPhase }) => {

    const styles = useStyles();
   
    return (
        <div className={styles.timer}>
            < Countdown
                key={endDate.toString()}
                date={endDate}
                renderer={props => (
                    <Grid 
                    container 
                    spacing={2} 
                    style={{ padding: '8px', justifyContent: 'center' }}>
                        <Grid 
                        item xl={3}>
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
                    </Grid>
                )}
                onComplete={() => {
                    setNextPhase()
                }}>
            </Countdown>
        </div>
    )
}

export default FullsizeTimer;