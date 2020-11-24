import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    userInfo: {
        justifyContent: 'left'
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));


const SingleUserInfo = (props) => {

    const styles = useStyles();
    const { user } = props;

    return (
        <>
            <ListItem >
                <ListItemText
                    alignItems="flex-start"
                    className={styles.userInfo}
                    primary={`${user.firstName} ${user.lastName}`}
                    secondary={user.points} />

                <ListItemText
                    alignItems="flex-start"
                    className={styles.userInfo} />
                <ListItemText
                    alignItems="flex-start"
                    className={styles.userInfo} />
                <ListItemAvatar>
                    <Avatar
                        alt={user.username}
                        className={styles.large}
                        src={`http://localhost:4000/public/avatars/${user.avatarUrl}`} />
                </ListItemAvatar>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default SingleUserInfo;