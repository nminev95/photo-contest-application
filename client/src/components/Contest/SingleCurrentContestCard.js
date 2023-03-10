import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import CountdownTimerComponent from './CountdownTimerComponent';
import { Tooltip } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: '0.5s all ease-in-out',
        '&:hover': {
            opacity: '1',
            transform: 'scale(1.1)',
            cursor: 'pointer'
        }
    },
    media: {
        height: 230,
    },
    text: {
        height: 25,
        display: "flex",
        position: "relative",
        textAlign: "left",
        color: "white",
        marginTop: "35px",
    },
    timer: {
        height: 25,
        display: "flex",
        textAlign: "bottom",
        marginRight: "15px",
        marginTop: "35px",
        color: "white",
    },
    counterBar: {
        height: theme.spacing(12),
        background:
            'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
    },
}));

const SingleCurrentContestView = (props) => {

    const { contest } = props;
    const { id } = contest;
    const classes = useStyles();
    const history = useHistory();
    const userRole = useSelector(state => state.loginState.user.role);
    console.log(contest)
    return (
        <Grid item xs={12} sm={3}   >
            <Card className={classes.card} >
                <CardActionArea>
                    {userRole === 'Organizer' ? (
                        <Tooltip
                            title={<p style={{ fontSize: '17px', margin: '8px auto', lineHeight: '1em' }}>
                                You have rated {contest.rated} out of {contest.entries} photos.</p>}>
                            <CardMedia
                                image={`http://localhost:4000/public/${contest.contestCover}`}
                                className={classes.media}
                                onClick={() => history.push(`/contests/${id}`)}>
                                <GridListTileBar
                                    actionIcon={contest.phase_id !== 3 && <CountdownTimerComponent
                                        contestData={contest} />}
                                    title={contest.title}
                                    classes={{
                                        root: classes.counterBar,
                                        title: classes.text,
                                        actionIcon: classes.timer,
                                    }}>
                                </GridListTileBar>
                            </CardMedia>
                        </Tooltip>
                    ) : (
                            <CardMedia
                                image={`http://localhost:4000/public/${contest.contestCover}`}
                                className={classes.media}
                                onClick={() => history.push(`/contests/${id}`)}>
                                <GridListTileBar
                                    actionIcon={contest.phase_id !== 3 && <CountdownTimerComponent
                                        contestData={contest} />}
                                    title={contest.title}
                                    classes={{
                                        root: classes.counterBar,
                                        title: classes.text,
                                        actionIcon: classes.timer,
                                    }}>
                                </GridListTileBar>
                            </CardMedia>
                        )}
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default SingleCurrentContestView;