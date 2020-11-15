import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },

    middleContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(0, 0, 6),
        borderRadius: 16,
    },
    Buttons: {
        marginTop: theme.spacing(4),
    },
    Icons: {
        marginTop: theme.spacing(4),
        color: "grey",
    },
    Large: {
        width: theme.spacing(18),
        height: theme.spacing(18),
    },
    Name: {
        padding: theme.spacing(0, 0, 0),
    },
}));


const UserProfilePersonalInfo = (props) => {

    const { userData } = props;
    const classes = useStyles();

    return (
        <div className={classes.middleContent}>
            <Grid container spacing={1} justify="center" style={{ fontSize: 50 }}>
                <Avatar className={classes.Large} style={{ position: "relative", top: "-50px" }} ></Avatar>
            </Grid>
            <Container maxWidth="md">

                <Typography className={classes.Name} component="h6" variant="h4" align="center" color="textPrimary" gutterBottom>
                    {userData.firstName} {userData.lastName}
                </Typography>
                <div>
                    <Grid container spacing={2} justify="center" >
                        <Grid item>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Rank: {userData.rank}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Points: {userData.points}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                {(userData.info) ? (
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        {userData.info}
                    </Typography>
                ) : (
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        Let other people know more about you...
                    </Typography>
                    )}
                <div className={classes.Buttons}>
                    <Grid container spacing={2} justify="center" >
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Awards
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Contest history
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>

    )

}

export default UserProfilePersonalInfo;



