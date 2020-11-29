import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Button, List } from '@material-ui/core';
import { notification } from 'antd';
import { Link } from 'react-router-dom';

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

const SingleNotification = ({ notificationData, type }) => {

    const classes = useStyles();

    // const renderSingleNotification = (type) => {
    //     if (type === 'juryInvitation') {
    //         <List className={classes.root}>
    //         <Typography
    //             className={classes.dividerFullWidth}
    //             color="textSecondary"
    //             display="block"
    //             variant="caption"
    //         >
    //             @Username
    //         </Typography>
    //         <ListItem style={{ paddingBottom: "0", paddingTop: "0"}}>
    //             <ListItemText primary="Hello there, I really liked your photo and wo..." />
    //         </ListItem>
    //         <ListItem style={{ paddingTop: "0", left: "125px" }}>
    //             <ListItemText secondary="2 hours ago" />
    //         </ListItem>
    //         <Divider />
    //     </List>
    //     }
    // }
    return (
        
        <List className={classes.root}>
            <div style={{margin: '0 auto'}}>
            <Typography
                className={classes.dividerFullWidth}
                color="textSecondary"
                display="block"
                variant="caption"
            >
                @{notificationData.invitedBy}
            </Typography>
            <ListItem style={{ paddingBottom: "0", paddingTop: "0", whiteSpace: 'initial'}}>
                <ListItemText primary={`Hey there! I have added you as jury for my new contest - #${notificationData.contest_id} ${notificationData.contest}.`} />
            </ListItem>
            <ListItem style={{marginBottom: '10px'}}>
            <Button variant="contained" color="primary" style={{ outline: 'none', marginRight: '30px'}}>Go to contest</Button>
            <Button variant="contained" color="secondary" style={{ outline: 'none' }}>Mark as read</Button>
            </ListItem>
            <Divider />
            </div>
        </List>
    )
}

export default SingleNotification;