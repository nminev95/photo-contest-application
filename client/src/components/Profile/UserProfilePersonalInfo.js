import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: "#eeeeee" ,
        height: "1080px",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover"
    },
    root: {
        zIndex: -1,
        height: '100%',
        width: '900px',
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    Buttons: {
        marginTop: theme.spacing(4),
    },
    Icons: {
        marginTop: theme.spacing(4),
        color: "grey",
    },
    Large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    Name: {
        padding: theme.spacing(0, 0, 0),
    },
    container: {
        [theme.breakpoints.up('sm')]: {
            width: '50%',
            height: '350px',
            backgroundColor: "white",
            borderRadius: "10px",
            marginTop: '10em',
            boxShadow: '0 1px 3px rgba(0,0,0,0.20), 0 1px 2px rgba(0,0,0,0.24)',
            zIndex: 1,
        },
        [theme.breakpoints.only('xs')]: {
            width: '100%',
            height: '550px',
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            marginTop: '10em',
            zIndex: 1,
        },
    },
    mainGrid: {
        [theme.breakpoints.only('xs')]: {
            width: "147%",
            marginTop: "20px",
        },
    }
}));


const UserProfilePersonalInfo = (props) => {

    const { userData } = props;
    const classes = useStyles();

    return (
        <div  className={classes.background}>
        <div  style={{ display:"flex", justifyContent: 'center'}}>
        <Box className={classes.container} justify="center" >
            <Grid container spacing={2} justify="center" >               
                    {/* <Grid container spacing={1} justify="center" style={{ fontSize: 50, paddinTop: "20px" }}>
                        <Avatar className={classes.Large} style={{ position: "relative" }} ></Avatar>
                    </Grid> */}
                    <Container maxWidth="md">
                        <Typography className={classes.Name} component="h6" variant="h4" align="center" color="textPrimary" gutterBottom style={{ marginTop: "75px" }}>
                            {userData.firstName} {userData.lastName}
                        </Typography>
                        <div>
                            <Grid container spacing={2} justify="center" >
                                <Grid item style={{paddingRight:"0px"}}>
                                    <  EmojiEventsIcon style={{ fontSize: 40 }}> </ EmojiEventsIcon>
                                </Grid>
                                <Typography variant="h6" align="center" color="textSecondary" style={{ marginTop: "14px" }}paragraph>
                                {userData.rank}
                                    </Typography>
                                    <Grid item>
                                    <FontAwesomeIcon icon={faAward} size="2x" style={{marginTop:"4px" , marginLeft: "25px"}} /> 
                                </Grid>
                                <Typography variant="h6" align="center" color="textSecondary" style={{ marginTop: "14px" }}paragraph>
                                {userData.points}
                                    </Typography>
                                    
                            </Grid>

                            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                Joined on: {userData.registered}
                            </Typography>
                        </div>
                        <div className={classes.Buttons}>
                            <Grid container spacing={2} justify="center" >
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        style={{ backgroundColor: "green" }} >
                                        Awards
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        style={{ backgroundColor: "green" }} >
                                        Contest history
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                
            </Grid>
        </Box>
        </div>
        </div>
    )

}

export default UserProfilePersonalInfo;



