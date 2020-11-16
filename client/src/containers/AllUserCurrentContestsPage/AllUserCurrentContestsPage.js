import React, { useEffect } from 'react';
import userEndpoints from '../../requests/user-requests';
import axios from '../../requests/axios';
import swal from '@sweetalert/with-react';
import AllCurrentContestsBox from '../../components/Contest/AllCurrentContestsBox';
import EmptyPageComponent from '../../components/Contest/EmptyPageComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setUserCurrentContestsData } from '../../redux/actions/index';

const AllCurrentContestsPage = (props) => {

    const { id } = props.match.params;
    const dispatch = useDispatch();
    const userCurrentContestsData = useSelector(state => state.userCurrentContestState);

    useEffect(() => {
        axios.get(userEndpoints.userCurrentContests)
        .then((response) => dispatch(setUserCurrentContestsData(response.data)))
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
    }, [id, dispatch]);
    
    return (
        <>
            { userCurrentContestsData.length > 0 ? (
                <React.Fragment>
                    {userCurrentContestsData && <AllCurrentContestsBox currentContestsData={userCurrentContestsData} />}
                </React.Fragment>
                ) : (
                <React.Fragment>
                    <EmptyPageComponent />
                </React.Fragment>
                )}
        </>
    )
}

export default AllCurrentContestsPage;