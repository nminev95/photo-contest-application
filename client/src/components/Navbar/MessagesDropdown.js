import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Badge, IconButton } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import MessagePreview from '../MessagePreview/MessagePreview';
import Link from '@material-ui/core/Link';

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
        // [theme.breakpoints.down(430)]: {
        //     marginLeft: '-10px',
        // },
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
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                >
                See all messages
                </Link>
            </StyledMenu>
        </Fragment>
    );
}

export default MessagesDropdown;