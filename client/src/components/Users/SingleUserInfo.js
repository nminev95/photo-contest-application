import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));


const SingleUserInfo = (props) => {
 
    const styles = useStyles();
    const { user } = props;

    console.log(user)
    return (
        <>
            <ListItem>
                <ListItemText primary={user.firstName} secondary={user.points} />
                <ListItemAvatar>
                    <Avatar alt={user.username} className={styles.large} src={`http://localhost:4000/public/avatars/${user.avatarUrl}`}/>                  
                </ListItemAvatar> 
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default SingleUserInfo;