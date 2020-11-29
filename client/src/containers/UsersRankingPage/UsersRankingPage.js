import React, { useEffect, useState } from 'react';
import userEndpoints from '../../requests/user-requests';
import axiosInstance from '../../requests/axios';
import UsersRankingsList from '../../components/Users/UsersRankingsList';
import EmptyPageComponent from '../../components/Contest/EmptyPageComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersRankingsData } from '../../redux/actions/index'


const UsersRankingPage = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const usersRankingsData = useSelector(state => state.usersRankingsState);

    useEffect(() => {
        axiosInstance.get(userEndpoints.getUsersRankings)
            .catch((error) => setError(error))
            .then((response) => dispatch(setUsersRankingsData(response.data)))
    }, [dispatch]);

    return (
        <>
            { !error ? (
                <UsersRankingsList
                    usersData={usersRankingsData} />
            ) : (
                    <EmptyPageComponent />
                )
            }
        </>
    )
};



export default UsersRankingPage;