import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import SentimentDissatisfiedRoundedIcon from '@material-ui/icons/SentimentDissatisfiedRounded';
import { makeStyles } from '@material-ui/core/styles';



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
                            Ooops... 
                        </p>
                        <p style={{ margin: '10px', paddingTop: "5 px", paddingBottom: "15px", fontSize: "30px" }}>
                            It seems like there is no content to be showed!
                        </p>
                    </Typography>
            </Box>
        </>
    )
}

export default EmptyPageComponent;