import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 320,
        display: 'flex',
        flexDirection: 'column',
        width: theme.spacing(58),
        height: theme.spacing(25),
        marginLeft: theme.spacing(2),

    },
    media: {
        height: 180,
    },
    text: {
        height: 25,
    },
    button: {
        marginTop: theme.spacing(0),
    },
}));

const SingleCurrentContestView = (props) => {

    const { contest } = props;
    const { id } = contest;
    const classes = useStyles();
    const history = useHistory();

    return (
        <Grid item xs={12} sm={3}   >
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        image={`http://localhost:4000/public/contest-covers/${contest.contestCover}`}
                        className={classes.media}
                        onClick={() => history.push(`/contests/${id}`)}
                    />
                    <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
                        {contest.title}
                    </Typography>
                </CardActionArea>
            </Card>
        </Grid>

    );

};

export default SingleCurrentContestView;