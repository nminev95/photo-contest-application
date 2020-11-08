import React, { useEffect } from 'react';
import AllContestsBox from "./../../components/AllContests/AllContestsBox"
import contestEndpoints from '../../requests/contest-requests';
import axios from '../../requests/axios';
import swal from '@sweetalert/with-react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllContestsData } from '../../redux/actions/index'

const AllContestsPage = () => {
   
    const dispatch = useDispatch();
    const contestsData = useSelector(state => state.allContestState);

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
            .then((response) =>  dispatch(setAllContestsData(response.data)))
    }, [dispatch]);

    console.log(contestsData);
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