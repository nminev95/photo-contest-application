import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MobileDropdown from './MobileDropdown';
import ProfileDropdown from './ProfileDropdown';
import MessagesDropdown from './MessagesDropdown';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navLinks: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  dropdown: {
    padding: '0',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex'
    },
  }
}));

const Navbar = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar style={{ paddingRight: "0", paddingLeft: "0" }}>
          <MenuItem className={classes.dropdown}><MobileDropdown /></MenuItem>
          <MenuItem className={classes.navLinks}>Dashboard</MenuItem>
          <MenuItem className={classes.navLinks}>All Contests</MenuItem>
          <MenuItem className={classes.navLinks}>Explore photos</MenuItem>
          <div className={classes.grow} />
          <MenuItem style={{ padding: "0" }}>
            <MessagesDropdown />
          </MenuItem>
          <MenuItem style={{ padding: "0" }}>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          <MenuItem style={{ top: "0", left: "0", padding: "0", paddingRight: "7px" }} >
            <ProfileDropdown>Profile</ProfileDropdown>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </div >
  );
}

export default Navbar;