import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import MobileDropdown from './MobileDropdown';
import ProfileDropdown from './ProfileDropdown';
import NotificationsDropdown from './NotificationsDropdown';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import logo from './logo.png'

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
        <AppBar position="static" className={classes.appBar} style={{ backgroundColor: "#2D3142" }} >
          <Toolbar style={{ paddingRight: "0", paddingLeft: "0" }}>
            <div style={{ maxHeight: '100px' }}>
              <img alt='photopedia-logo' style={{ maxHeight: '70px', margin: '10px' }} src={logo}></img>
            </div>
            <div className={classes.grow} />
            <Button onClick={() => history.push('/users/register')} style={{ marginLeft: "5px", marginRight: "10px", color: "white" }} variant="outlined">Register</Button>
            <Button onClick={() => history.push('/users/login')} style={{ marginLeft: "5px", marginRight: "10px", color: "white" }} variant="outlined" >Sign in</Button>
          </Toolbar>
        </AppBar>
      ) : (
          <AppBar position="static" style={{ backgroundColor: "#2D3142" }}>
            <Toolbar style={{ paddingRight: "0", paddingLeft: "0" }}>
              <div style={{ maxHeight: '100px', maxWidth: '350px' }}>
                <img alt='photopedia-logo' style={{ maxHeight: '70px', margin: '10px' }} src={logo}></img>
              </div>
              <MobileDropdown />
              <MenuItem className={classes.navLinks} onClick={() => history.push('/home')}>Home</MenuItem>
              {userState.user.role === 'Photo Junkie' &&
                <MenuItem className={classes.navLinks} onClick={() => history.push('/contests')}> Open Contests</MenuItem>}
              {userState.user.role === 'Photo Junkie' &&
                <MenuItem className={classes.navLinks} onClick={() => history.push('/users/contests')}>My entries</MenuItem>}
              {userState.user.role === 'Organizer' &&
                <MenuItem className={classes.navLinks} onClick={() => history.push('/contests')}> Contests Phase I </MenuItem>}
              {userState.user.role === 'Organizer' &&
                <MenuItem className={classes.navLinks} onClick={() => history.push('/contests/phase/2')}> Contests Phase II </MenuItem>}
              {userState.user.role === 'Organizer' &&
                <MenuItem className={classes.navLinks} onClick={() => history.push('/contests/phase/3')}>Finished Contests </MenuItem>}
              {userState.user.role === 'Organizer' &&
                <MenuItem className={classes.navLinks} onClick={() => history.push('/users/ranking')}>Rankings</MenuItem>}
              <div className={classes.grow} />
              <NotificationsDropdown />
              <ProfileDropdown />
            </Toolbar>
          </AppBar>
        )}
    </div >
  );
}

export default Navbar;