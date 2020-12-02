import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: '0.5s all ease-in-out',
        backgroundColor: '#e0e0e0',
        '&:hover': {
            transform: 'scale(1.08)',
            cursor: 'pointer',
            backgroundColor: '#9e9e9e',
        }
    },
    media: {
        height: 180,
    },
    button: {
        marginTop: theme.spacing(0),
        fontFamily: '"Segoe UI"',
        fontSize: '12px',
        fontWeight: '1px',
        backgroundColor: '#D8D5DB',
        color: '2D3142',
        '&:hover': {
            backgroundColor: '#2D3142',
            color: '#D8D5DB',
        }

    },
    text: {
        color: 'black',
        fontSize: '20px',
        fontFamily: '"Segoe UI"',
        fontWeight: '500',

    },
}));

const SingleContestCard = (props) => {
    const { contest } = props;
    const { id } = contest;
    const classes = useStyles();
    const history = useHistory();

    return (
        <Grid item xs={12} sm={6} md={3} >
            <Card className={classes.card} >
                <CardActionArea style={{ outline: 'none' }}>
                    <CardMedia
                        image={`http://localhost:4000/public/${contest.contestCover}`}
                        className={classes.media}
                        onClick={() => history.push(`/contests/${id}`)} />
                </CardActionArea>
                <CardContent>
                    <Typography
                        className={classes.text}
                        variant="body2"
                        color="textSecondary"
                        component="p">
                        {contest.title}
                        #{contest.id}
                    </Typography>
                    {contest.phase_id === 1 &&
                        <>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                style={{ marginBottom: '10px' }}>
                                {contest.spots} starting free spots
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                style={{ marginBottom: '10px' }}>
                                {Math.floor((new Date(contest.firstPhaseLimit).getTime() - new Date().getTime()) / (1000 * 3600 * 24))} days left until entry closes
                            </Typography>
                            </>
                        }
                            <Divider
                                style={{ marginBottom: '10px' }} />
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                style={{ marginBottom: '10px' }}>
                                {contest.category.slice(0, 80)}...
                            </Typography>
                </CardContent>
                <CardActions
                    style={{ justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        className={classes.button}
                        size="small"
                        onClick={() => history.push(`/contests/${id}`)} >
                        See more
                </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SingleContestCard;