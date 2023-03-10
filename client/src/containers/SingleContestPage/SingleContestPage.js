import { useEffect, useState } from 'react';
import ContestBackgroundImageBox from '../../components/Contest/ContestBackgroundImageBox';
import ContestInfo from '../../components/Contest/ContestInfo';
import axiosInstance from '../../requests/axios';
import contestEndpoints from '../../requests/contest-requests';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { setContestDetails, setContestResults, setUserData } from '../../redux/actions/index'
import ContestPhotosGrid from '../../components/Contest/ContestPhotosGrid';
import { useParams } from 'react-router-dom';
import ContestEntriesAndScoresTabs from '../../components/Contest/ContestEntriesAndScoresTabs';
import ContestResults from '../../components/Contest/ContestResults';
import userEndpoints from '../../requests/user-requests';

const SingleContestPage = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.loginState.user);
    const contestInfo = useSelector(state => state.singleContestState);
    const [areResultsFetched, setAreResultsFetched] = useState(false);
    const contestJury = contestInfo.jury;
    const [tabValue, setTabValue] = useState('entries');
    const [uploadedState, setUploadedState] = useState(false);
    const userData = useSelector(state => state.userState);

    const triggerUploadedStateRefresh = () => {
        setUploadedState(prevState => !prevState);
    }

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
    }, [dispatch, contestInfo.phase_id, id, uploadedState])

    if (!userData) {
        axiosInstance.get(userEndpoints.userProfile)
            .then((response) => dispatch(setUserData(response.data)))
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
    }

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
                return <p
                    style={{ fontSize: '20px', marginTop: '20px' }}>
                    All user entries will be available for view once the contest finishes.</p>
        }
    }

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <>
            <ContestBackgroundImageBox />
            <ContestInfo
                triggerRender={triggerUploadedStateRefresh}
                contestInfo={contestInfo} />
            <ContestEntriesAndScoresTabs
                handleTabChange={handleTabChange}
                tabValue={tabValue} />
            {tabValue === 'entries' ? (
                renderContestPhotosGrid()
            ) : (
                    <ContestResults />
                )}
        </>
    )
}

export default SingleContestPage;

