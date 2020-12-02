import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faCamera } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from '@material-ui/core';
import { useSelector } from 'react-redux';

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
    const privateContests = useSelector(state => state.privateContestsState);

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
                {privateContests && privateContests.length === 0 ? (
                    <Tooltip title={<p style={{ fontSize: '15px', margin: '8px auto', lineHeight: '1em' }}>You aren't participating in any private contests in the moment.</p>}>
                        <span>
                            <Tab
                                disabled
                                icon={<FontAwesomeIcon style={{ fontSize: '25px' }} icon={faEyeSlash} />}
                                style={{ outline: 'none', pointerEvents: 'none' }}
                                label="Invitational"
                                value='Invitational' />
                        </span>
                    </Tooltip>
                ) : (
                        <Tab
                            icon={<FontAwesomeIcon style={{ fontSize: '25px' }} icon={faEyeSlash} />}
                            style={{ outline: 'none' }}
                            label="Invitational"
                            value='Invitational' />
                    )}
            </Tabs>
        </Paper>
    );
}

export default FilterPublicPrivateContestsTabs