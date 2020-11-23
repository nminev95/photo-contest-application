import AllContestsBox from './../../components/Contest/AllContestsBox';
import React, { useEffect } from 'react';
import contestEndpoints from '../../requests/contest-requests';
import axiosInstance from '../../requests/axios';
import swal from '@sweetalert/with-react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllContestsData } from '../../redux/actions/index';

const AllContestsPage = () => {

    const dispatch = useDispatch();
    const contestsData = useSelector(state => state.allContestState);

    useEffect(() => {
        axiosInstance.get(contestEndpoints.allContests)
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
            .then((response) => dispatch(setAllContestsData(response.data)))
    }, [dispatch]);

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