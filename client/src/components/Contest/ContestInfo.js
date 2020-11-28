import { Divider, Grid, Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CountdownTimerComponent from './CountdownTimerComponent';
import ProgressStepper from './ProgressStepper';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadPhoto from '../../containers/UploadPhoto/UploadPhoto';

const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.only('xl')]: {
            width: '65%',
            height: '430px',
            backgroundColor: "white",
            borderRadius: "7px",
            marginTop: '-8em',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            margin: 'auto',
            zIndex: 1,
        },
        [theme.breakpoints.only('lg')]: {
            width: '65%',
            height: '455px',
            backgroundColor: "white",
            borderRadius: "7px",
            marginTop: '-8em',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            margin: 'auto',
            zIndex: 1,
        },
        [theme.breakpoints.only('md')]: {
            width: '65%',
            height: '510px',
            backgroundColor: "white",
            borderRadius: "7px",
            marginTop: '-8em',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            margin: 'auto',
            zIndex: 1,
        },
        [theme.breakpoints.only('sm')]: {
            width: '100%',
            height: '495px',
            backgroundColor: "white",
            borderRadius: "7px",
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            margin: 'auto',
            zIndex: 1,
        },
        [theme.breakpoints.only('xs')]: {
            width: '100%',
            height: '650px',
            backgroundColor: "white",
            borderRadius: "7px",
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            margin: 'auto',
            zIndex: 1,
        },
    },
    mainGrid: {
        height: '100%',
        [theme.breakpoints.only('xs')]: {
            width: "147%"
        },
    },
    extraGrid: {
        [theme.breakpoints.only('xs')]: {
            display: 'none'
        },
    },
    infoText: {
        [theme.breakpoints.only('xl')]: {
            margin: '10px', 
            padding: '50px'
        },
        [theme.breakpoints.only('lg')]: {
            margin: '10px', 
            padding:"30px"
        },
        [theme.breakpoints.only('md')]: {
            margin: '10px', 
            padding:"10px"
        },
        [theme.breakpoints.only('sm')]: {
            margin: '10px', 
            padding:"10px"
        },
    }
}))
//entries === spots
const ContestInfo = ({ contestInfo }) => {

    const styles = useStyles();

    return (
        <>
            <Box className={styles.container}>
                <ProgressStepper />
                <Divider variant="middle" />
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Paper elevation={3}
                            className={styles.mainGrid}
                            style={{ margin: '10px' }}><p className={styles.infoText}>{contestInfo.category}</p></Paper>
                    </Grid>
                    <Grid item className={styles.extraGrid} xs={4}>
                        <Paper style={{ textAlign: "-webkit-center", maxwidth: "100%", paddingTop: "20px" }}>
                            <div>
                                Contest theme is {contestInfo.title}
                                <br></br>
                                {contestInfo.entries && contestInfo.entries.length} photographers entered
                                <br></br>
                                {contestInfo.entries && +contestInfo.spots - contestInfo.entries.length} free places left
                            </div>
                            <div style={{ margin: '20px' }}>
                                <CountdownTimerComponent contestData={contestInfo} />
                            </div>
                            <div style={{ paddingBottom: '20px' }}>
                                <UploadPhoto />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ContestInfo;