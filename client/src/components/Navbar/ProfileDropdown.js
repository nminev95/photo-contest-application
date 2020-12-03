import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import { Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OpenCreateContestFormButton from '../Contest/CreateContestModal';
import axiosInstance from '../../requests/axios';
import authEndpoints from '../../requests/auth-requests';
import swal from 'sweetalert';
import { logout } from '../../redux/actions'
import { socket } from '../../App';

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

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
    menuDropdown: {
        [theme.breakpoints.only('xs')]: {
            marginLeft: "16px"
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: "16px"
        },
    },
}))

const ProfileDropdown = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const styles = useStyles();
    const history = useHistory();
    const userState = useSelector(state => state.loginState);
    const userInfo = useSelector(state => state.userState);

    const dispatch = useDispatch()

    const handleLogout = () => {
        axiosInstance.delete(authEndpoints.logoutUser)
            .catch((err) => {
                if (err.response.status === 500) {
                    swal({
                        title: "Oops!",
                        text: "An unexpected error occured. Please try again.",
                        icon: "error",
                        button: "Okay"
                    })
                }
            }).then(() => {
                localStorage.clear();
                socket.emit('logout', JSON.stringify(userState.user.sub));
                dispatch(logout());
                history.push('/');
            })
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <MenuItem style={{ padding: "0", top: "0", left: "0", paddingRight: "7px" }}>
                <IconButton
                    style={{ height: "83px", outline: 'none' }}
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleClick}
                >
                    {userInfo  &&  
                    <Avatar
                        alt={userInfo.username}
                        src={`http://localhost:4000/public/avatars/${userInfo.avatar}`} />                    
                    }  
                </IconButton>
            </MenuItem>
            <StyledMenu
                className={styles.menuDropdown}
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {userState.user.role === 'Organizer' &&
                    <OpenCreateContestFormButton />
                }
                <StyledMenuItem
                    onClick={() => {
                        handleClose();
                        history.push('/profile')
                    }}>
                    <ListItemIcon>
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="View profile" />
                </StyledMenuItem>
                <StyledMenuItem onClick={() => handleLogout()}>
                    <ListItemIcon>
                        <InboxIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </StyledMenuItem>
            </StyledMenu>
        </Fragment>
    );
}

export default ProfileDropdown;