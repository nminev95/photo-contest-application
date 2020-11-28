import { useEffect, useState } from 'react';
import ContestBackgroundImageBox from '../../components/Contest/ContestBackgroundImageBox';
import ContestInfo from '../../components/Contest/ContestInfo';
import axiosInstance from '../../requests/axios';
import contestEndpoints from '../../requests/contest-requests';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { setContestDetails, setContestResults } from '../../redux/actions/index'
import ContestPhotosGrid from '../../components/Contest/ContestPhotosGrid';
import { useParams } from 'react-router-dom';
import ContestEntriesAndScoresTabs from '../../components/Contest/ContestEntriesAndScoresTabs';
import ContestResults from '../../components/Contest/ContestResults';

const SingleContestPage = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.loginState.user);
    const contestInfo = useSelector(state => state.singleContestState);
    const [areResultsFetched, setAreResultsFetched] = useState(false);
    const contestJury = contestInfo.jury;
    const [tabValue, setTabValue] = useState('entries');
  
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
    }, [dispatch, contestInfo.phase_id, id])

    if (contestInfo && !areResultsFetched && contestInfo.phase_id === 3) {
        axiosInstance.get(`${contestEndpoints.singleContest}${id}/results`) 
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
            .then((data) => {
                dispatch(setContestResults(data.data));
                setAreResultsFetched(true);
            })
    }

    const renderContestPhotosGrid = () => {
        switch (true) {
            case (contestInfo && contestInfo.phase_id === 3):
                return (
                    <ContestPhotosGrid />
                )
            case (contestJury && contestJury.some(jury => jury.id === userInfo.sub)):
                return (
                    <ContestPhotosGrid />
                )
            default:
                return (
                    <ContestPhotosGrid isBlurred={true} />
                )
        }
    }

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <>
            <ContestBackgroundImageBox />
            <ContestInfo contestInfo={contestInfo} />
            <ContestEntriesAndScoresTabs handleTabChange={handleTabChange} tabValue={tabValue} />
            {tabValue === 'entries' ? (
                renderContestPhotosGrid()
            ) : (
                <ContestResults/>
                )}
        </>
    )
}

export default SingleContestPage;

