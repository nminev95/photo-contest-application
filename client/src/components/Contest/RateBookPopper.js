import React from 'react';
import Button from '@material-ui/core/Button';
import { Box, Checkbox, FormControlLabel, Popper, TextField, Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles((theme) => ({
    paper: {
        border: '1px solid',
        padding: theme.spacing(4),
        backgroundColor: theme.palette.background.paper,
        borderRadius: '5px',
        width: '24vw',
        [theme.breakpoints.only('lg')]: {
            width: '28vw',
        },
        [theme.breakpoints.only('md')]: {
            width: '40vw',
        },
        [theme.breakpoints.only('sm')]: {
            width: '70vw',
        },
        [theme.breakpoints.only('xs')]: {
            width: '101vw',
        }
        
    },
    text: {
        color: "black",
        whiteSpace: "initial",
        marginBottom: '20px'
    },
    input: {
        width: '100%',
        marginBottom: '30px'
    }
}));

const RateBookPopper = () => {

    const styles = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'transitions-popper' : undefined;

    return (
        <div>
            <Button
                aria-describedby={id}
                type="button"
                onClick={handleClick}
                variant="contained"
                color="secondary"
                style={{ outline: 'none' }}>
                {!open ? 'Rate photo' : 'Close menu'}
            </Button>
            <Popper id={id} open={open} anchorEl={anchorEl} transition disablePortal>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box boxShadow={2} className={styles.paper}>
                            <Typography id="discrete-slider-always" gutterBottom className={styles.text}>Please provide a rating you find suitable for this photo's story/quality/creativeness. Available rating values are from 1 (lowest) to 10 (highest).
                                </Typography>
                            <Rating name="customized-10" defaultValue={0} max={10} size="large" /><br></br>
                            <Typography id="discrete-slider-always" gutterBottom className={styles.text}>Leave a comment for the author what you loved about the photo or what he can improve.
                                </Typography>
                            <TextField
                                className={styles.input}
                                label="Your comment"
                                name="comment"
                                rows={6}
                                multiline
                                variant="outlined"
                                type="text"
                            /><br></br>
                            <FormControlLabel className={styles.text}
                                control={
                                    <Checkbox
                                        icon={<ErrorOutlineIcon fontSize="medium" />}
                                        checkedIcon={<ErrorIcon fontSize="medium" />}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="secondary"
                                    />
                                }
                                label="Mark the exclamation mark field if you believe the photo does not belong in this contest category. The entry will automatically get a score of zero and the appropriate warning comment."
                            />
                            <br></br>
                            <Button
                                variant="contained"
                                color="primary"
                                // onClick={handleSubmit}
                            >
                                Rate photo
                    </Button>
                            <Button
                                style={{ outline: 'none', marginLeft: "15px" }}
                                variant="contained"
                                color="secondary"
                                onClick={handleClick}
                            >
                                Cancel
                    </Button>
                        </Box>
                    </Fade>
                )}
            </Popper>
        </div>
    );
}

export default RateBookPopper;