import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import MenuIcon from '@material-ui/icons/Menu';
import { Badge, IconButton } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import MessagePreview from '../MessagePreview/MessagePreview';

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
            marginLeft: "17px"
        },
        [theme.breakpoints.only('sm')]: {
            marginLeft: "24px"
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: "15px"
        },
    },
}))

const MessagesDropdown = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const styles = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <IconButton
                onClick={handleClick}
                aria-label="show 4 new mails"
                color="inherit"
                style={{ height: "83px" }}>
                <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                </Badge>
            </IconButton>
            <StyledMenu
                className={styles.menuDropdown}
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>
                    <MessagePreview />
                </MenuItem>
                <MenuItem>
                    <MessagePreview />
                </MenuItem>
                <MenuItem>
                    <MessagePreview />
                </MenuItem>
                <MenuItem>
                    <MessagePreview />
                </MenuItem>
            </StyledMenu>
        </Fragment>
    );
}

export default MessagesDropdown;