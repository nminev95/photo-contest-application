import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Button, List } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNotifications } from '../../redux/actions';
import axiosInstance from '../../requests/axios';

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
    const dispatch = useDispatch();

    const markRead = async (contestId) => {
        axiosInstance.put('http://localhost:4000/users/notifications', { contestId: contestId })
            .then(res => {
                dispatch(setNotifications(res.data))
            });
    }

    const renderSingleNotification = (type, notificationData) => {
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
                    <ListItem
                        style={{ paddingBottom: "0", paddingTop: "0", whiteSpace: 'initial' }}>
                        <ListItemText
                            primary={`Hey there! I have added you as a jury for my new contest - #${notificationData.contest_id} ${notificationData.contest}.`} />
                    </ListItem>
                    <ListItem
                        style={{ marginBottom: '10px' }}>
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

                            }}>
                            Mark as read
                                </Button>
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
                        <ListItemText
                            primary={`Hello! I have created a special invitational contest and would like you to participate in it - #${notificationData.contest_id} ${notificationData.contest}.`} />
                    </ListItem>
                    <ListItem
                        style={{ marginBottom: '10px' }}>
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
                            }}>
                            Mark as read
                            </Button>
                    </ListItem>
                    <Divider />
                </List>
            )
        }
    }

    return (
        renderSingleNotification(type, notificationData)
    )
}

export default SingleNotification;