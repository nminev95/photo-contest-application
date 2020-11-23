import React, { useEffect } from 'react';
import LatestContestsGrid from '../../components/HomePageComponents/LatestContestsGrid';
import TextBox from '../../components/HomePageComponents/TextBox';
import contestEndpoints from '../../requests/contest-requests';
import axiosInstance from '../../requests/axios';
import swal from '@sweetalert/with-react';
import { useDispatch, useSelector } from 'react-redux';
import { setRecentlyExpContestsData } from '../../redux/actions/index';

const HomePage = () => {

    const dispatch = useDispatch();
    const contestsData = useSelector(state => state.recentlyExpContestState);

    useEffect(() => {
        axiosInstance.get(contestEndpoints.recentlyExpContests)
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
            .then((response) => dispatch(setRecentlyExpContestsData(response.data)))
    }, [dispatch]);

    return (
        <>
            <LatestContestsGrid contestsData={contestsData} />
            <TextBox />
        </>
    )
}

export default HomePage;