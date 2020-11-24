import React, { useEffect } from 'react';
import userEndpoints from '../../requests/user-requests';
import axiosInstance from '../../requests/axios';
import swal from '@sweetalert/with-react';
import UsersRankingsList from '../../components/Users/UsersRankingsList';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersRankingsData } from '../../redux/actions/index'


const UsersRankingPage = () => {

    const dispatch = useDispatch();
    const usersRankingsData = useSelector(state => state.usersRankingsState);
    console.log(usersRankingsData)

    useEffect(() => {
        axiosInstance.get(userEndpoints.getUsersRankings)
            .then((response) => dispatch(setUsersRankingsData(response.data)))
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
    }, [dispatch]);

    return (
        <>
            <UsersRankingsList usersData={usersRankingsData} />
        </>
    )
};


export default UsersRankingPage;