import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Tooltip } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: -1,
        height: '100%',
        width: '900px',
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    Buttons: {
        marginTop: theme.spacing(4),
    },
    Icons: {
        marginTop: theme.spacing(4),
        color: "grey",
    },
    Large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    Name: {
        padding: theme.spacing(0, 0, 0),
    },
    container: {
        [theme.breakpoints.up('sm')]: {
            width: '38%',
            height: '480px',
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: '0 1px 3px rgba(0,0,0,0.20), 0 1px 2px rgba(0,0,0,0.24)',
            marginTop: '-18em',
            marginBottom: '5em',
            zIndex: 1,
        },
        [theme.breakpoints.only('xs')]: {
            width: '100%',
            height: '470px',
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            zIndex: 1,
        },
    },
    mainGrid: {
        [theme.breakpoints.only('xs')]: {
            width: "147%",
            marginTop: "20px",
        },
    },
    avatar: {
        width: theme.spacing(16),
        height: theme.spacing(16),
        marginTop: '30px'
    }
}));


const UserProfilePersonalInfo = (props) => {

    const { userData } = props;
    const classes = useStyles();

    const getNextRank = (currentRank) => {
        switch (true) {
            case (currentRank === 'Junkie'):
                return 'Next rank: Enthusiast';
            case (currentRank === 'Enthusiast'):
                return 'Next rank: Master';
            case (currentRank === 'Master'):
                return 'Next rank: Wise and Benevolent Photo Dictator';
            default:
                return 'Looks like you are already max rank possible. Good job!';
        }
    }

    const getPointsLeft = (currentPoints) => {
        switch (true) {
            case (Number(currentPoints) < 50):
                return `Points left until next rank: ${50 - Number(currentPoints)}`;
            case (Number(currentPoints) > 50 && Number(currentPoints) < 150):
                return `Points left until next rank: ${150 - Number(currentPoints)}`;
            case (Number(currentPoints) > 150 && Number(currentPoints) < 1000):
                return `Points left until next rank: ${1000 - Number(currentPoints)}`;
            default:
                return 'Points won\'t affect your rank anymore. You are already max rank.';
        }
    }
    return (
        <div style={{ display: "flex", justifyContent: 'center' }}>
            <Box
                className={classes.container}
                justify="center" >
                <Grid
                    container
                    spacing={2}
                    justify="center" >
                    <Container
                        maxwidth="md"
                        style={{ textAlign: '-webkit-center' }}>
                        {userData.avatar ? (
                            <Avatar
                                alt={userData.username}
                                src={`http://localhost:4000/public/avatars/${userData.avatar}`}
                                className={classes.avatar} />
                        ) : (
                                <Avatar
                                    className={classes.avatar} />
                            )}
                        <Typography
                            className={classes.Name}
                            component="h6"
                            variant="h4"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                            style={{ marginTop: "20px" }}>
                            {userData.firstName} {userData.lastName}
                        </Typography>
                        <Grid container style={{ justifyContent: 'center' }}>
                            <Grid item style={{ alignSelf: "center" }}>
                                <EmailIcon style={{ fontSize: 30, color: "gray " }} />
                            </Grid>
                            <Grid item>

                                <Typography
                                    variant="h6"
                                    align="center"
                                    color="textSecondary"
                                    style={{ marginTop: "14px" }}
                                    paragraph>
                                    {userData.email}
                                </Typography>
                            </Grid>
                        </Grid>
                        <div style={{ marginTop: '10px' }}>
                            <Grid
                                container spacing={2}
                                justify="center" >
                                <Grid item
                                    style={{ paddingRight: "0px" }}>
                                    <  EmojiEventsIcon
                                        style={{ fontSize: 40, color: "cc8f00" }}> </ EmojiEventsIcon>
                                </Grid>
                                <Tooltip
                                    title={<p style={{ fontSize: '17px', margin: '8px auto', lineHeight: '1em' }}>
                                        {getNextRank(userData.rank)}
                                    </p>}
                                    arrow>
                                    <Typography
                                        variant="h6"
                                        align="center"
                                        color="textSecondary"
                                        style={{ marginTop: "14px" }}
                                        paragraph>
                                        {userData.rank}
                                    </Typography>
                                </Tooltip>
                                <Grid item>
                                    <FontAwesomeIcon
                                        icon={faAward}
                                        size="2x"
                                        style={{ marginTop: "4px", marginLeft: "25px", color: "d45b3e" }} />
                                </Grid>
                                <Tooltip title={<p style={{ fontSize: '17px', margin: '8px auto', lineHeight: '1em' }}>
                                    {getPointsLeft(userData.points)}</p>}
                                    arrow>
                                    <Typography
                                        variant="h6"
                                        align="center"
                                        color="textSecondary"
                                        style={{ marginTop: "14px" }}
                                        paragraph>
                                        {userData.points}
                                    </Typography>
                                </Tooltip>
                            </Grid>
                            <Typography
                                style={{ marginTop: '10px' }}
                                variant="h6"
                                align="center"
                                color="textSecondary" paragraph>
                                Joined on: {userData.registered}
                            </Typography>
                        </div>
                        <div className={classes.Buttons}>
                            <Grid
                                container
                                spacing={2}
                                justify="center" >
                                <Grid item>
                                    {props.showHistory ? (
                                        <Button
                                            style={{ outline: 'none' }}
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => props.toggleShowHistory(true)}>
                                            Hide contest history
                                        </Button>
                                    ) : (
                                            <Button
                                                style={{ outline: 'none' }}
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => props.toggleShowHistory(true)}>
                                                Show contest history
                                            </Button>
                                        )}
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </Grid>
            </Box>
        </div>
    )
}

export default UserProfilePersonalInfo;



