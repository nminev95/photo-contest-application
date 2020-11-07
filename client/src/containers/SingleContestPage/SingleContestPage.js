import { useEffect } from 'react';
import ContestBackgroundImageBox from '../../components/Contest/ContestBackgroundImageBox';
import ContestInfo from '../../components/Contest/ContestInfo';
import axios from '../../requests/axios';
import contestEndpoints from '../../requests/contest-requests';
import { BASE_URL } from '../../constants/constants';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { setContestDetails } from '../../redux/actions/index'

const SingleContestPage = (props) => {

    const { id } = props.match.params;
    const dispatch = useDispatch();
    const contestImage = useSelector(state => state.singleContestState.contestCover);
    
    useEffect(() => {
        axios.get(`${BASE_URL}${contestEndpoints.getSingleContest}${+id}`)
            .catch((error) => {
                if (error.response.status === 401) {
                    swal({
                        title: "Oops!",
                        text: "Contest not found.",
                        icon: "error",
                        button: "Go back"
                    })
                }
            })
            .then((data) => dispatch(setContestDetails(data.data)))
    }, [])
    
    return (
        <>
            <ContestBackgroundImageBox image={contestImage} />
            <ContestInfo />
        </>
    )
}

export default SingleContestPage;