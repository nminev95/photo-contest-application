import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ProgressStepper from './ProgressStepper';

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
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            height: '700px',
            backgroundColor: "white",
            borderRadius: "7px",
            marginTop: '-3em',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            margin: 'auto',
            zIndex: 1,
        }
    }
}))

const ContestInfo = () => {

    const styles = useStyles();

    return (
        <>
            <Box className={styles.container}>
                <ProgressStepper />
            </Box>
        </>
    )
}

export default ContestInfo;