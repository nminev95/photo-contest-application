import { useEffect } from 'react';
import ContestBackgroundImageBox from '../../components/Contest/ContestBackgroundImageBox';
import ContestInfo from '../../components/Contest/ContestInfo';
import axios from '../../requests/axios';
import contestEndpoints from '../../requests/contest-requests';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { setContestDetails } from '../../redux/actions/index'
import ContestPhotosGrid from '../../components/Contest/ContestPhotosGrid';
import { useParams } from 'react-router-dom';

const SingleContestPage = () => {
    
    const { id } = useParams()
    const dispatch = useDispatch();

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
            <ContestBackgroundImageBox />
            <ContestInfo />
            <ContestPhotosGrid />
        </>
    )
}

export default SingleContestPage;