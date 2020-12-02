import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faCalendarCheck, faCamera } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: 'fit-content',
        background: 'none',
        margin: '0 auto',
    },
});

const FilterContestPhasesTabs = ({ handleTabChange, tabValue }) => {
    const classes = useStyles();

    return (
        <Paper
            square
            className={classes.root}>
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
            >
                <Tab icon={<FontAwesomeIcon style={{fontSize:'25px'}} icon={faCamera}/>}
                    style={{ outline: 'none' }}
                    label="Phase I"
                    value='Phase I' />

                <Tab
                    icon={<FontAwesomeIcon style={{fontSize:'25px'}} icon={faAward}/>}
                    style={{ outline: 'none' }}
                    label="Phase II"
                    value='Phase II' />

                <Tab
                    icon={<FontAwesomeIcon style={{fontSize:'24px'}} icon={faCalendarCheck}/>}
                    style={{ outline: 'none' }}
                    label="Finished"
                    value='Finished' />
            </Tabs>
        </Paper>
    );
}

export default FilterContestPhasesTabs;