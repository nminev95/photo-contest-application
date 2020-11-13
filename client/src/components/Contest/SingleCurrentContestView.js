import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CountdownTimer from './CountdownTimer';
import { useHistory } from 'react-router-dom';
import GridListTileBar from '@material-ui/core/GridListTileBar';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 320,
        display: 'flex',
        flexDirection: 'column',
        width: theme.spacing(58),
        height: theme.spacing(36),
        marginLeft: theme.spacing(2),

    },
    media: {
        height: 180,
    },
    text: {
        height: 50,
    },
    counterBar: {
        height: theme.spacing(8),
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    timer: {
        height: theme.spacing(8),
    }
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
                    {/* <GridListTileBar className={classes.counterBar}> */}
                    {/* </GridListTileBar> */}
                    {/* <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
                        {contest.title}
                    </Typography> */}
                   
                        <CountdownTimer />
                    
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default SingleCurrentContestView;