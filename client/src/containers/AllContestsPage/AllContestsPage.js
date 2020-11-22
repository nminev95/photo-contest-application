import React from 'react';
import AllContestsBox from './../../components/Contest/AllContestsBox';
import {  useSelector } from 'react-redux';


const AllContestsPage = () => {

    const contestsData = useSelector(state => state.allContestState);

    return (
        <React.Fragment>
            < main>
                <div>
                    {contestsData && <AllContestsBox contestsData={contestsData} />}
                </div>
            </main>
        </React.Fragment>
    )
}

export default AllContestsPage;