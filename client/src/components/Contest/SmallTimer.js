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
        fontSize: '30px',
        lineHeight: 'normal'
    },
    text: {
        fontSize: '12px'
    }
}))

const SmallTimer = ({ endDate, setNextPhase }) => {
    return (
        < Countdown
            autoStart={true}
            date={endDate}
            onComplete={() => {
                setNextPhase()
            }}>
        </Countdown>
    )
}

export default SmallTimer;