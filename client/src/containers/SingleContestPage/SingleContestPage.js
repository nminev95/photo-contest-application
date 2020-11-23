import { useEffect } from 'react';
import ContestBackgroundImageBox from '../../components/Contest/ContestBackgroundImageBox';
import ContestInfo from '../../components/Contest/ContestInfo';
import axiosInstance from '../../requests/axios';
import contestEndpoints from '../../requests/contest-requests';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { setContestDetails } from '../../redux/actions/index'
import ContestPhotosGrid from '../../components/Contest/ContestPhotosGrid';
import { useParams } from 'react-router-dom';

const SingleContestPage = () => {

    const { id } = useParams()
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.loginState.user);
    const contestInfo = useSelector(state => state.singleContestState);
    const contestJury = contestInfo.jury;

    useEffect(() => {
        axiosInstance.get(`${contestEndpoints.singleContest}${id}`)
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

    const renderContestPhotosGrid = () => {
        switch (true) {
            case (contestInfo.phase_id === 3):
                return (
                    <ContestPhotosGrid />
                )
            case (contestJury.some(jury => jury.id === userInfo.sub)):
                return (
                    <ContestPhotosGrid />
                )
            default:
                return null;
        }
    }

    console.log(contestInfo)
    return (
        <>
            <ContestBackgroundImageBox />
            <ContestInfo />
            {renderContestPhotosGrid}
        </>
    )
}

export default SingleContestPage;