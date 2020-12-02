import React, { useEffect, useState } from 'react';
import userEndpoints from '../../requests/user-requests';
import axiosInstance from '../../requests/axios';
import UsersRankingsList from '../../components/Users/UsersRankingsList';
import EmptyPageComponent from '../../components/Contest/EmptyPageComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersRankingsData } from '../../redux/actions/index'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import rankingsCover from '../../assets/images/rankings_cover.jpg';

const useStyles = makeStyles((theme) => ({
    image: {
        [theme.breakpoints.up('md')]: {
            height: '500px',
            width: '100%',
            backgroundImage: `url(${rankingsCover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0
        },
        [theme.breakpoints.down('sm')]: {
            height: '450px',
            width: '100%',
            backgroundImage: `url(${rankingsCover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0
        }
    },
}));

const UsersRankingPage = () => {

    const styles = useStyles();
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
            <Box className={styles.image}/>
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