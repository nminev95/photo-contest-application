import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = () => {

    const Completionist = () => <span>Loading...</span>;

    return (
        <Countdown 
        date={Date.now() + 5000}
        onComplete={() => console.log('done')}>
            <Completionist />
        </Countdown>
    )
}

export default CountdownTimer;