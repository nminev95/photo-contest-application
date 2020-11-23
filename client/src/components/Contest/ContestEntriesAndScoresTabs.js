import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CollectionsIcon from '@material-ui/icons/Collections';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 500,
    },
});

const ContestEntriesAndScoresTabs = ({ handleTabChange, tabValue }) => {
    const classes = useStyles();

    return (
        <Paper square className={classes.root}>
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
            >
                <Tab icon={<CollectionsIcon />} style={{outline: 'none'}} label="All entries" value='entries' />
                <Tab icon={<CheckCircleIcon />} style={{outline: 'none'}} label="View results" value='results' />
            </Tabs>
        </Paper>
    );
}

export default ContestEntriesAndScoresTabs;