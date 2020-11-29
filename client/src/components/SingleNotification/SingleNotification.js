import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Button, List } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import socketIOClient from "socket.io-client";
import decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { setNotifications } from '../../redux/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        padding: 0,
        wordWrap: 'break-word',
    },
    dividerFullWidth: {
        margin: `5px 0 0 ${theme.spacing(2)}px`,
        textAlign: 'left',
    },
    dividerInset: {
        margin: `5px 0 0 ${theme.spacing(9)}px`,
    },
    hours: {
        textAlign: 'right',
    }
}));

const SingleNotification = ({ notificationData, type, handleClose }) => {

    const classes = useStyles();
    const history = useHistory();
    const socket = socketIOClient("http://localhost:4000");
    const notificationsState = useSelector(state => state.userNotificationsState);
    const dispatch = useDispatch();
    
    const markRead = (contestId) => {
        const user = decode(localStorage.getItem('accessToken'))
        socket.emit('mark_read', JSON.stringify(user), JSON.stringify(contestId))
        // const filteredJuryNotifications = notificationsState.juryInvitations.filter((notification) => !!notification.isRead === false);
        // const filteredContestNotifications = notificationsState.privateContestInvitations.filter((notification) => !!notification.isRead === false);
        // dispatch(setNotifications({
        //     juryInvitations: filteredJuryNotifications,
        //     privateContestInvitations: filteredContestNotifications
        // }))
    }


    const renderSingleNotification = (type) => {
        if (type === 'juryInvitation') {
            return (
                <List className={classes.root}>
                    <Typography
                        className={classes.dividerFullWidth}
                        color="textSecondary"
                        display="block"
                        variant="caption"
                    >
                        @{notificationData.invitedBy}
                    </Typography>
                    <ListItem style={{ paddingBottom: "0", paddingTop: "0", whiteSpace: 'initial' }}>
                        <ListItemText primary={`Hey there! I have added you as a jury for my new contest - #${notificationData.contest_id} ${notificationData.contest}.`} />
                    </ListItem>
                    <ListItem style={{ marginBottom: '10px' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ outline: 'none', marginRight: '35px' }}
                            onClick={() => {
                                history.push(`/contests/${notificationData.contest_id}`)
                                handleClose()
                            }}>Go to contest</Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{ outline: 'none' }}
                            onClick={() => {
                                markRead(notificationData.contest_id);

                            }}>Mark as read</Button>
                    </ListItem>
                    <Divider />
                </List>
            )
        } else if (type === 'privateContestInvitation') {
            return (
                <List className={classes.root}>
                    <Typography
                        className={classes.dividerFullWidth}
                        color="textSecondary"
                        display="block"
                        variant="caption"
                    >
                        @{notificationData.invitedBy}
                    </Typography>
                    <ListItem style={{ paddingBottom: "0", paddingTop: "0", whiteSpace: 'initial' }}>
                        <ListItemText primary={`Hello! I have created a special invitational contest and would like you to participate in it - #${notificationData.contest_id} ${notificationData.contest}.`} />
                    </ListItem>
                    <ListItem style={{ marginBottom: '10px' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ outline: 'none', marginRight: '35px' }}
                            onClick={() => {
                                history.push(`/contests/${notificationData.contest_id}`)
                                handleClose()
                            }}>Go to contest</Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            style={{ outline: 'none' }}
                            onClick={() => {
                                markRead(notificationData.contest_id);
                            }}>Mark as read</Button>
                    </ListItem>
                    <Divider />
                </List>
            )
        }
    }

    return (
        renderSingleNotification(type)
    )
}

export default SingleNotification;