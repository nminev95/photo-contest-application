import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Badge, IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector } from 'react-redux';
import SingleNotification from '../SingleNotification/SingleNotification';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
));

const useStyles = makeStyles((theme) => ({
    menuDropdown: {
        [theme.breakpoints.only('xs')]: {
            marginLeft: "15px"
        },
        [theme.breakpoints.only('sm')]: {
            marginLeft: "24px"
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: "15px",
            maxHeight: '600px'
        },
    },
}))

const NotificationsDropdown = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const styles = useStyles();
    const notificationsState = useSelector(state => state.userNotificationsState);
    let notificationsCount = 0;

    if (notificationsState.juryInvitations && notificationsState.privateContestInvitations) {
        notificationsCount = +notificationsState.juryInvitations.length + +notificationsState.privateContestInvitations.length
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            {notificationsCount && notificationsCount !== 0 ? (
                <IconButton
                    onClick={handleClick}
                    aria-label="show 4 new mails"
                    color="inherit"
                    style={{ height: "83px", outline: 'none' }}>
                    <Badge badgeContent={notificationsCount} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            ) : (
                    <IconButton
                        onClick={handleClick}
                        aria-label="show 4 new mails"
                        color="inherit"
                        style={{ height: "83px", outline: 'none' }}>
                        <Badge color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                )}
            <StyledMenu
                className={styles.menuDropdown}
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {notificationsState.juryInvitations && notificationsState.juryInvitations.map((notification) => {
                    return (
                        <MenuItem key={notification.contest_id}>
                            <SingleNotification notificationData={notification} handleClose={handleClose} type='juryInvitation' />
                        </MenuItem>
                    )
                })}
                {notificationsState.privateContestInvitations && notificationsState.privateContestInvitations.map((notification) => {
                    return (
                        <MenuItem key={notification.contest_id}>
                            <SingleNotification notificationData={notification} handleClose={handleClose} type='privateContestInvitation' />
                        </MenuItem>
                    )
                })}
            </StyledMenu>
        </Fragment>
    );
}

export default NotificationsDropdown;