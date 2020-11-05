import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 150,
    },
});

const SingleContest = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image=""
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Category
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       Do not miss the chance!
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent: 'center'}}>
                <Button size="small" color="primary"  >
                    Join
        </Button>
                
            </CardActions>
        </Card>
    );

};

export default SingleContest;