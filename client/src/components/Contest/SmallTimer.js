import Countdown from "react-countdown";

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