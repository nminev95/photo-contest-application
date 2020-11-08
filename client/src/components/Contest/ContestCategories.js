import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(5, 0, 0),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',

        title: {
            color: 'white',
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
        tile: {
            maxWidth: (30),
        },
    },
}));

const ContestCategories = (props) => {

    const classes = useStyles();
    const { contestsData } = props;

    return (

        <div className={classes.root}>
             <Typography  component="h7" variant="h6" align="center" color="textPrimary" gutterBottom>
                    Explore all contest categories... 
                </Typography>
            <GridList className={classes.gridList} cols={6}>
                {contestsData.map((tile) => (
                    <GridListTile key={tile.id}>
                        <img  className={classes.tile} src={tile.contestCover} alt={tile.category} />
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default ContestCategories;
