import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faCamera } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: 'fit-content',
        background: 'none',
        margin: '0 auto',
    },
});

const FilterPublicPrivateContestsTabs = ({ tabValue, handleTabChange }) => {

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
                <Tab icon={<FontAwesomeIcon style={{ fontSize: '25px' }} icon={faCamera} />}
                    style={{ outline: 'none' }}
                    label="Open contests"
                    value='Open contests' />
                
                <Tooltip title="You aren't participating in any private contests in the moment.">
                    <Tab
                        disabled
                        icon={<FontAwesomeIcon style={{ fontSize: '25px' }} icon={faEyeSlash} />}
                        style={{ outline: 'none' }}
                        label="Invitational"
                        value='Invitational' />
                </Tooltip>
            </Tabs>
        </Paper>
    );
}

export default FilterPublicPrivateContestsTabs