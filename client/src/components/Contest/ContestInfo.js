import { Divider, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CountdownTimerComponent from './CountdownTimerComponent';
import ProgressStepper from './ProgressStepper';
import UploadPhoto from '../../containers/UploadPhoto/UploadPhoto';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.only('xl')]: {
            width: '65%',
            backgroundColor: "white",
            borderRadius: "7px",
            marginTop: '-8em',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            margin: 'auto',
            zIndex: 1,
        },
        [theme.breakpoints.only('lg')]: {
            width: '65%',
           
            backgroundColor: "white",
            borderRadius: "7px",
            marginTop: '-8em',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            margin: 'auto',
            zIndex: 1,
        },
        [theme.breakpoints.only('md')]: {
            width: '65%',         
            backgroundColor: "white",
            borderRadius: "7px",
            marginTop: '-8em',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            margin: 'auto',
            zIndex: 1,
        },
        [theme.breakpoints.only('sm')]: {
            width: '100%',         
            backgroundColor: "white",
            borderRadius: "7px",
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            margin: 'auto',
            zIndex: 1,
        },
        [theme.breakpoints.only('xs')]: {
            width: '100%',          
            backgroundColor: "white",
            borderRadius: "7px",
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            margin: 'auto',
            zIndex: 1,
        },
    },
    infoText: {
        [theme.breakpoints.only('xl')]: {
            margin: '10px',
            padding: '45px',
            textAlign: 'justify',
        },
        [theme.breakpoints.only('lg')]: {
            margin: '10px',
            padding: "30px",
            textAlign: 'justify',
        },
        [theme.breakpoints.only('md')]: {
            margin: '10px',
            padding: "10px",
            textAlign: 'justify',
        },
        [theme.breakpoints.only('sm')]: {
            margin: '10px',
            padding: "10px",
            textAlign: 'justify',
        },
    }
}))
//entries === spots
const ContestInfo = ({ contestInfo }) => {

    const styles = useStyles();

    return (
        <>
            <Box
                className={styles.container}>
                <ProgressStepper />
                <Divider
                    variant="middle" />
                <Grid
                    container 
                    style={{paddingTop: '5px'}}>
                    <Grid item
                        xs={12}
                        sm={7}
                        md={7}  >
                        <Typography
                            className={styles.infoText}
                        >
                        {contestInfo.category}
                        </Typography>
                    </Grid>                  
                    <Divider
                    variant='fullWidth'
                    orientation='vertical'
                    flexItem='true'
                    style={{paddingTop: '8px'}} />
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        style={{paddingLeft: '65px'}}>
                        <Typography
                            style={{ textAlign: "-webkit-center", maxwidth: "100%", paddingTop: "47px" }}>
                            <div>
                                Contest theme is {contestInfo.title}
                                <br></br>
                                {contestInfo.enrolled && contestInfo.enrolled.length} photographers entered
                                <br></br>
                                {contestInfo.enrolled && +contestInfo.spots - contestInfo.enrolled.length} free places left
                            </div>
                            <Grid style={{ margin: '20px', justifyContent: 'center' }}>
                                <CountdownTimerComponent
                                    contestData={contestInfo} />
                            </Grid>
                            <Grid
                                style={{ paddingBottom: '20px' }}>
                                <UploadPhoto />
                            </Grid>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ContestInfo;