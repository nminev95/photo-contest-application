import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

    image: {
        width: 'auto',
        height: '180px',
        marginTop: '25px',
        transition: '0.5s all ease-in-out',
        '&:hover': {
            opacity: '0.8',
            transform: 'scale(1.1)',
            cursor: 'pointer'
        }
    },
}));

const SinglePhoto = (props) => {

    const classes = useStyles();
    const { photo } = props;

    return (
        <Grid item
            xs={12}
            sm={6}
            md={3}
            lg={3}  >
            <img
                className={classes.image}
                alt={"hello"}
                src={`http://localhost:4000/public/entries/thumbnails/${photo.thumbnailSize}`}
            />
        </Grid>
    )
}

export default SinglePhoto;