import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CollectionsIcon from '@material-ui/icons/Collections';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 500,
        background: 'none',
        margin: '0 auto',
    },
});

const ContestEntriesAndScoresTabs = ({ handleTabChange, tabValue }) => {
    const classes = useStyles();

    const contestInfo = useSelector(state => state.singleContestState);

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
                <Tab icon={<CollectionsIcon />}
                    style={{ outline: 'none' }}
                    label="All entries"
                    value='entries' />
                {contestInfo && contestInfo.phase_id === 3 ? (
                    <Tab
                        icon={<CheckCircleIcon />}
                        style={{ outline: 'none' }}
                        label="View results"
                        value='results' />
                ) : (
                        <Tab
                            icon={<CheckCircleIcon />}
                            disabled style={{ outline: 'none' }}
                            label="View results"
                            value='disabledResults' />
                    )}
            </Tabs>
        </Paper>
    );
}

export default ContestEntriesAndScoresTabs;