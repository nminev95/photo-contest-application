import { useEffect } from 'react';
import ContestBackgroundImageBox from '../../components/Contest/ContestBackgroundImageBox';
import ContestInfo from '../../components/Contest/ContestInfo';
import axios from '../../requests/axios';
import contestEndpoints from '../../requests/contest-requests';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { setContestDetails } from '../../redux/actions/index'
import ContestPhotosGrid from '../../components/Contest/ContestPhotosGrid';

const SingleContestPage = (props) => {

    const { id } = props.match.params;
    const dispatch = useDispatch();
    const contestState = useSelector(state => state.singleContestState);

    useEffect(() => {
        axios.get(`${contestEndpoints.singleContest}${id}`)
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
    }, [dispatch, id])

    return (
        <>
            <ContestBackgroundImageBox image={contestState.contestCover} />
            <ContestInfo />
            <ContestPhotosGrid/>
        </>
    )
}

export default SingleContestPage;