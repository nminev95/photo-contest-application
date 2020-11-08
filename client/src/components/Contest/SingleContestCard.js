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
    root: {
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        width: theme.spacing(60),
        height: theme.spacing(37),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    media: {
        height: 150,
    },
}));

const SingleContestCard = (props) => {

    const { contest } = props;
    const { id } = contest;
    const classes = useStyles();
    const history = useHistory();

    return (
        <Grid item xs={12} sm={3}>
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        image={contest.contestCover}
                        className={classes.media}
                        onClick={() => history.push(`/contests/${id}`)}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {contest.category}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {contest.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Button size="small" color="primary"  >
                        Join now
                </Button>
                </CardActions>
            </Card>
        </Grid>

    );

};

export default SingleContestCard;