import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Badge, Button, IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector } from 'react-redux';
import SingleNotification from '../SingleNotification/SingleNotification';
import VisibilityIcon from '@material-ui/icons/Visibility';

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
    noContent: {
        [theme.breakpoints.only('xs')]: {
            marginLeft: "15px"
        },
        [theme.breakpoints.only('sm')]: {
            marginLeft: "24px"
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: "15px",
            maxHeight: '600px',
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
                    style={{ height: "83px", outline: 'none', color: 'black' }}>
                    <Badge
                        badgeContent={notificationsCount}
                        color="secondary">
                        <NotificationsIcon fontSize="large" />
                    </Badge>
                </IconButton>
            ) : (
                    <IconButton
                        onClick={handleClick}
                        aria-label="show 4 new mails"
                        style={{ height: "83px", outline: 'none', color: 'black' }}>
                        <Badge
                            color="secondary">
                            <NotificationsIcon
                                fontSize="large" />
                        </Badge>
                    </IconButton>
                )}
            {notificationsCount ? (
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
                            <MenuItem
                                key={notification.contest_id}>
                                <SingleNotification
                                    notificationData={notification}
                                    handleClose={handleClose}
                                    type='juryInvitation' />
                            </MenuItem>
                        )
                    })}
                    {notificationsState.privateContestInvitations && notificationsState.privateContestInvitations.map((notification) => {
                        return (
                            <MenuItem
                                key={notification.contest_id}>
                                <SingleNotification
                                    notificationData={notification}
                                    handleClose={handleClose}
                                    type='privateContestInvitation' />
                            </MenuItem>
                        )
                    })}
                </StyledMenu>
            ) : (
                    <StyledMenu
                        className={styles.noContent}
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    ><MenuItem
                        style={{ color: "gray", whiteSpace: "initial", width: '400px', margin: '20px' }}>
                            <VisibilityIcon
                                fontSize='large'
                                style={{ marginRight: '10px' }} />
                        Looks like you are already up to date and don't have any new notifications.
                        </MenuItem>
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{ outline: 'none', marginBottom: '10px' }}
                            onClick={handleClose}>
                            Hide
                        </Button>
                    </StyledMenu>
                )}
        </Fragment>
    );
}

export default NotificationsDropdown;