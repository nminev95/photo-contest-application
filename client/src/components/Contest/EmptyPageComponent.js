import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SentimentDissatisfiedRoundedIcon from '@material-ui/icons/SentimentDissatisfiedRounded';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.up('md')]: {
            width: '65%',
            height: '500px',
            backgroundColor: "#fff9e6",
            borderRadius: "7px",
            marginTop: '10em',
            boxShadow: '0 1px 3px rgba(0,0,0,0.20), 0 1px 2px rgba(0,0,0,0.24)',
            margin: 'auto',
            zIndex: 1,
        },
        [theme.breakpoints.only('xs')]: {
            width: '100%',
            height: '700px',
            backgroundColor: "white",
            borderRadius: "7px",
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            margin: 'auto',
            zIndex: 1,
        },
    },
    mainGrid: {
        [theme.breakpoints.only('xs')]: {
            width: "147%",
            marginTop: "20px",
        },
    }
}))

const EmptyPageComponent = () => {
    const styles = useStyles();
    const history = useHistory();

    return (
        <>
            <Box className={styles.container}>
                <Grid container spacing={2} justify="center" >
                    <Grid item>
                        <SentimentDissatisfiedRoundedIcon style={{ fontSize: 80, marginTop: "70px" }}></SentimentDissatisfiedRoundedIcon>
                    </Grid>
                    </Grid>
                    <Typography
                        className={styles.mainGrid}
                        style={{ margin: '10px' }}>
                        <p style={{ margin: '10px', paddingTop: "15px", paddingBottom: "15px", fontSize: "30px" }}>
                            Ooops... It seems like you are not taking part in any contests!
                        </p>
                    </Typography>
                    <Grid container spacing={2} justify="center" >
                        <Grid item>
                            <Button
                                style={{ marginTop: '80px' }}
                                variant="contained"
                                color="secondary"
                                onClick={() => history.push('/contests')}>
                                Back to all contests
                            </Button>
                        </Grid>
                    </Grid>
            </Box>
        </>
    )
}

export default EmptyPageComponent;