import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { List } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        padding: 0,
    },
    dividerFullWidth: {
        margin: `5px 0 0 ${theme.spacing(2)}px`,
        textAlign: 'left',
    },
    dividerInset: {
        margin: `5px 0 0 ${theme.spacing(9)}px`,
    },
    hours: {
        textAlign: 'right',
    }
}));

const MessagePreview = () => {

    const classes = useStyles();

    return (
        <List className={classes.root}>
            <Typography
                className={classes.dividerFullWidth}
                color="textSecondary"
                display="block"
                variant="caption"
            >
                @Username
            </Typography>
            <ListItem
                style={{ paddingBottom: "0", paddingTop: "0" }}>
                <ListItemText
                    primary="Hello there, I really liked your photo and wo..." />
            </ListItem>
            <ListItem
                style={{ paddingTop: "0", left: "125px" }}>
                <ListItemText
                    secondary="2 hours ago" />
            </ListItem>
            <Divider />
        </List>
    )
}

export default MessagePreview;