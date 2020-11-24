import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import SingleUserInfo from './SingleUserInfo';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 600,
        backgroundColor: theme.palette.background.paper,
        justifyContent: 'center',
        paddingTop: '5px'
    },

    container: {
        marginTop: '50px',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f50057',
        maxWidth: '700px'
    },

    middleContent: {
        paddingTop: '40px',
        paddingBottom: '40px',
        width: '100%',
        maxWidth: 600,
    },
    text: {
        color: 'white',
        fontSize: '30px',
        fontFamily: '"Segoe UI"',
        fontWeight: '500',
        marginTop: '10px',
        textAlign: 'center',
    },
}));

const UsersRankingsList = (props) => {

    const { usersData } = props;
    const styles = useStyles();

    return (
        <Container xs={12} sm={6} md={3} className={styles.container} >
            <div className={styles.middleContent}>
                <Typography className={styles.text} >
                    Users Ranking
                </Typography>
                <List className={styles.root} >
                    {usersData.map((user) => <SingleUserInfo user={user} />)}
                </List>
            </div>
        </Container>
    );
}

export default UsersRankingsList;