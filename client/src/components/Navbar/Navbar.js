import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MobileDropdown from './MobileDropdown';
import ProfileDropdown from './ProfileDropdown';
import NotificationsDropdown from './NotificationsDropdown';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, IconButton, Tooltip } from '@material-ui/core';
import logo from './logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faHome, faImages, faCameraRetro } from '@fortawesome/free-solid-svg-icons';

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
              <div style={{ display: 'flex', width: '63%', justifyContent: 'center' }}>
                <Tooltip title={<p style={{ fontSize: '17px', margin: '8px auto' }}>Home</p>} arrow>
                  <IconButton
                    aria-label="home"
                    style={{ color: 'white', outline: 'none' }}
                    onClick={() => history.push('/home')}>
                    <FontAwesomeIcon icon={faHome} />
                  </IconButton>
                </Tooltip>
                <Tooltip title={<p style={{ fontSize: '17px', margin: '8px auto' }}>All contests</p>} arrow>
                  <IconButton
                    aria-label="contests"
                    style={{ marginRight: '35px', marginLeft: '35px', color: 'white', outline: 'none' }}
                    onClick={() => history.push('/contests')}>
                    <FontAwesomeIcon icon={faImages} />
                  </IconButton>
                </Tooltip>
                {userState.user.role === 'Photo Junkie' && <Tooltip title={<p style={{ fontSize: '17px', margin: '8px auto' }}>My entries</p>} arrow>
                  <IconButton
                    style={{ outline: 'none', color: 'white' }}
                    aria-label="my entries"
                    onClick={() => history.push('/users/contests')}>
                    <FontAwesomeIcon icon={faCameraRetro} />
                  </IconButton>
                </Tooltip>
                }
                {userState.user.role === 'Organizer' && <Tooltip title={<p style={{ fontSize: '17px', margin: '8px auto' }}>Rankings</p>} arrow>
                  <IconButton
                    style={{ outline: 'none', color: 'white' }}
                    aria-label="rankings"
                    onClick={() => history.push('/users/ranking')}>
                    <FontAwesomeIcon icon={faTrophy} />
                  </IconButton>
                </Tooltip>
                }
                {/* <MenuItem className={classes.navLinks} onClick={() => history.push('/home')}>Home</MenuItem>
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
                  <MenuItem className={classes.navLinks} onClick={() => history.push('/users/ranking')}>Rankings</MenuItem>} */}
              </div>
              <div className={classes.grow}></div>
              <div style={{ display: 'flex' }}>
                <NotificationsDropdown />
                <ProfileDropdown />
              </div>

            </Toolbar>
          </AppBar>
        )
      }
    </div >
  );
}

export default Navbar;