import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import SingleUserInfo from './SingleUserInfo';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',   
        paddingTop: '5px',
        textAlign: 'left',
    },
    container: {
        marginTop: '-30vh',
        marginBottom: '50px',
        maxWidth: '900px',
        backgroundColor: 'white'
    },
    text: {
        color: 'black',
        fontSize: '30px',
        fontFamily: '"Segoe UI"',
        fontWeight: '500',
        marginTop: '10px',
        textAlign: 'center',
    },
    userIcon: {
        color: 'black',
        paddingBottom: '10px',
        fontSize: '50px',
    },
    box: {
        marginBottom: '60px',
        paddingTop: '15px'
    }
}));

const UsersRankingsList = (props) => {

    const { usersData } = props;
    const styles = useStyles();

    return (
        <Container
            xs={12}
            sm={6}
            md={3}
            className={styles.container} >
            <Box
                className={styles.box}>
                <Typography
                    className={styles.text} >
                    <PersonIcon
                        className={styles.userIcon} />
                        Users Ranking
                </Typography>
                <List
                    className={styles.root} >
                    {usersData.map((user, index) => <SingleUserInfo
                        user={user}
                        place={index + 1}
                        key={user.id} />)}
                </List>
            </Box>
        </Container>
    );
}

export default UsersRankingsList;