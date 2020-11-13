import React, { useEffect } from 'react';
import userEndpoints from '../../requests/user-requests';
import axios from '../../requests/axios';
import swal from '@sweetalert/with-react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserCurrentContestsData } from '../../redux/actions/index'
import AllCurrentContestsBox from '../../components/Contest/AllCurrentContestsBox'

const AllCurrentContestsPage = (props) => {

    const { id } = props.match.params;
    const dispatch = useDispatch();
    const userCurrentContestsData = useSelector(state => state.userCurrentContestState);

    useEffect(() => {
        axios.get(userEndpoints.userCurrentContests + `${id}/contests` )
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
            .then((response) => dispatch(setUserCurrentContestsData(response.data)))
    }, [id, dispatch]);

    
return (
    <React.Fragment>
        < main>
            <div>
                {userCurrentContestsData && <AllCurrentContestsBox currentContestsData={userCurrentContestsData} />}
            </div>
        </main>
    </React.Fragment>
)
}

export default AllCurrentContestsPage;