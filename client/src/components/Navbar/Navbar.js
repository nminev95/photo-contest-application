import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MobileDropdown from './MobileDropdown';
import ProfileDropdown from './ProfileDropdown';
import MessagesDropdown from './MessagesDropdown';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

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
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const userState = useSelector(state => state.loginState);

  return (
    <div className={classes.grow}>
      {!userState.isLogged ? (
        <AppBar position="static" className={classes.appBar} style={{ backgroundColor: "black" }} >
          <Toolbar style={{ paddingRight: "0", paddingLeft: "0" }}>
            <div className={classes.grow} />
            <Button onClick={() => history.push('/users/register')} style={{  marginLeft:"5px", marginRight:"10px", color:"white" }}  variant="outlined">Register</Button>
            <Button onClick={() => history.push('/users/login')} style={{ marginLeft:"5px", marginRight:"10px", color:"white" }}  variant="outlined" >Sign in</Button>
          </Toolbar>
        </AppBar>
      ) : (
          <AppBar position="static" style={{ backgroundColor: "black" }}>
            <Toolbar style={{ paddingRight: "0", paddingLeft: "0" }}>
              <MobileDropdown />
              <MenuItem className={classes.navLinks}>Dashboard</MenuItem>
              <MenuItem className={classes.navLinks} onClick={() => history.push('/home')}>Home</MenuItem>
              <MenuItem className={classes.navLinks} onClick={() => history.push('/contests')}>All Contests</MenuItem>
              {userState.user.role === 'Photo Junkie'  &&
                <MenuItem className={classes.navLinks}  onClick={() => history.push('/users/contests')}>My entries</MenuItem>
              }
              {userState.user.role === 'Organizer' ? (
                <MenuItem className={classes.navLinks}  onClick={() => history.push('/users/ranking')}>Rankings</MenuItem>
              ) : (null)}
              <div className={classes.grow} />
              <MessagesDropdown />
              <MenuItem style={{ padding: "0" }}>
                <IconButton style={{ outline: 'none' }} aria-label="show 11 new notifications" color="inherit">
                  <Badge badgeContent={11} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </MenuItem>
              <ProfileDropdown />
            </Toolbar>
          </AppBar>
        )}
    </div >
  );
}

export default Navbar;