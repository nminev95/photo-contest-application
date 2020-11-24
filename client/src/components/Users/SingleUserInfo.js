import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    userInfo: {
        textAlign: 'left',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    medalGold: {
        marginTop: '4px',
        color: '#ffd600'
    },
    medalSilver: {
        marginTop: '4px',
        color: '#757575'
    },
    medalBronze: {
        marginTop: '4px',
        color: '#ff8a65'
    },
    placeAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
}));


const SingleUserInfo = (props) => {


    const styles = useStyles();
    const { user, place } = props;


    return (
        <>
            <ListItem >
                <ListItemAvatar>
                    {place === 1 && <FontAwesomeIcon icon={faMedal} size="4x" className={styles.medalGold} />}
                    {place === 2 && <FontAwesomeIcon icon={faMedal} size="4x" className={styles.medalSilver} />}
                    {place === 3 && <FontAwesomeIcon icon={faMedal} size="4x" className={styles.medalBronze} />}
                    {place > 3 && <Avatar className={styles.placeAvatar}>{place}</Avatar>}
                </ListItemAvatar>
                <ListItemText
                    primary={`${user.firstName} ${user.lastName}`}
                    secondary={`Points: ${user.points}`} />
                <ListItemText
                    className={styles.userInfo} />
                <ListItemText
                    className={styles.userInfo} />
                <ListItemText
                    className={styles.userInfo} />
                <ListItemText
                    className={styles.userInfo} />
                <ListItemAvatar>
                    {user.avatarUrl ? (
                        <Avatar
                            alt={user.username}
                            className={styles.large}
                            src={`http://localhost:4000/public/avatars/${user.avatarUrl}`} />
                    ) : (
                            <Avatar className={styles.large}></Avatar>
                        )}
                </ListItemAvatar>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default SingleUserInfo;