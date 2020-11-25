import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import SingleContestEntryReview from './SingleContestEntryReview';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 845,
    marginTop: '30px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    marginRight: 0
  },
}));

const SingleContestResultCard = ({ entry }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={`http://localhost:4000/public/avatars/${entry.authorAvatar}`}
            className={classes.avatar}
          />
        }
        title={entry.title}
        subheader={`by ${entry.author} on ${entry.addDate}`}
      />
      <CardMedia
        className={classes.media}
        image={`http://localhost:4000/public/${entry.originalSize}`}
        title={entry.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {entry.story}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <StarIcon style={{ color: "#ffb300" }} fontSize='large' />{entry.rating.toFixed(2)}/10
          <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          style={{ outline: "none" }}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {entry.reviews.map((review) => <SingleContestEntryReview review={review} />)}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default SingleContestResultCard;