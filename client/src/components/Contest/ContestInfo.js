import { Divider, Grid, Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CountdownTimer from './CountdownTimer';
import ProgressStepper from './ProgressStepper';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.up('md')]: {
            width: '65%',
            height: '900px',
            backgroundColor: "white",
            borderRadius: "7px",
            marginTop: '-3em',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
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
            width: "147%"
        },
    },
    extraGrid: {
        [theme.breakpoints.only('xs')]: {
            display: 'none'
        },
    }
}))

const ContestInfo = () => {
    const contestInfo = useSelector(state => state.singleContestState)

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
                            style={{ margin: '10px' }}><p style={{ margin: '10px', paddingTop: "15px", paddingBottom: "15px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></Paper>
                    </Grid>
                    <Grid item className={styles.extraGrid} xs={4}>
                        <Paper style={{ textAlign: "-webkit-center", maxWidth: "100%", paddingTop:"20px" }}>
                            <div>
                                Contest theme is {contestInfo.title}
                                <br></br>
                                {contestInfo.participants} photographers entered
                                <br></br>
                                {contestInfo.limit - contestInfo.participants} free places left
                            </div>
                            <div style={{margin: '20px'}}>
                                <CountdownTimer />
                            </div>
                            <div style={{paddingBottom:'20px'}}>
                                {contestInfo.phase_id === 1 || contestInfo.limit === contestInfo.participants ? (
                                    <Button variant="contained" color="primary">Enter competition</Button>
                                ) : (
                                        <Button disabled variant="contained" color="primary">Enter competition</Button>

                                    )}
                            </div>

                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ContestInfo;