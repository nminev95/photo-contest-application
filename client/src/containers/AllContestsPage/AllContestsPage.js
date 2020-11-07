import React, { useState, useEffect } from 'react';
import contestEndpoints from '../../requests/contest-requests';
import axios from '../../requests/axios';
import swal from '@sweetalert/with-react';
import AllContestsBox from '../../components/Contest/AllContestsBox';

const AllContestsPage = () => {
   

    const [contestsData, setContestData] = useState(null);

    useEffect(() => {
        axios.get(contestEndpoints.allContests)
            .catch((error) => {
                if (error.response.status === 404) {
                    swal({
                        title: "Oops!",
                        text: "Looks like no information found!",
                        icon: "error",
                        button: "Okay"
                    })
                }
            })
            .then((response) => { setContestData(response.data) })
    }, []);


    return (
        <React.Fragment>
            < main>
                <div>                  
                    { contestsData && <AllContestsBox contestsData={contestsData} /> }                   
                </div>
            </main>
        </React.Fragment>
    )

}

export default AllContestsPage;