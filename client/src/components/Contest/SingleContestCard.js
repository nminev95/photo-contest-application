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
        height: 180,
    },
    button: {
        marginTop: theme.spacing(0),
        fontFamily: '"Segoe UI"',
        fontSize: '12px',
        fontWeight: '1px',
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
                <CardActionArea>
                    <CardMedia
                        image={`http://localhost:4000/public/contest-covers/${contest.contestCover}`}
                        className={classes.media}
                        outline="none"
                        onClick={() => history.push(`/contests/${id}`)} />
                    <CardContent>
                        <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
                            {contest.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        className={classes.button}
                        size="small"
                        color="secondary"
                        outline="none"
                        onClick={() => history.push(`/contests/${id}`)} >
                        See more
                </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SingleContestCard;