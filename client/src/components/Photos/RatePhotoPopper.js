import Button from '@material-ui/core/Button';
import { Box, Checkbox, FormControlLabel, Popper, TextField, Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ErrorIcon from '@material-ui/icons/Error';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import axiosInstance from '../../requests/axios';
import { useSelector } from 'react-redux';
import contestEndpoints from '../../requests/contest-requests';
import Rating from '@material-ui/lab/rating';

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

const RatePhotoPopper = ({ photoId, triggerRender }) => {

    const styles = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [score, setScore] = useState(0)
    const [comment, setComment] = useState('');
    const [isInappropriate, setIsInappropriate] = useState(false);
    const contestInfo = useSelector(state => state.singleContestState);
    const open = Boolean(anchorEl);
    const id = open ? 'transitions-popper' : undefined;
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    useEffect(() => {
        setScore(0);
        setComment('');
        setIsInappropriate(false);
    }, [photoId])
    
    const handleSubmit = () => {

        const review = {
            score,
            comment,
            isInappropriate
        }

        if (isInappropriate) {
            swal({
                title: "Are you sure?",
                text: "Marking this photo as inappropriate for this contest will automatically give the entry a score of zero.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        axiosInstance.post(`${contestEndpoints.singleContest}${contestInfo.id}${contestEndpoints.contestEntry}${photoId}/rate`, review)
                            .catch((error) => {
                                if (error.response) {
                                    swal({
                                        title: "Oops!",
                                        text: "Something went wrong! Please try again.",
                                        icon: "error",
                                        button: "Okay"
                                    })
                                }
                            })
                            .then((response) => {
                                if (response) {
                                    handleClick();
                                    triggerRender();
                                    swal({
                                        title: "Success!",
                                        text: "Your review has been successfully submitted.",
                                        icon: "success",
                                        buttons: false,
                                        timer: 1500,
                                    })
                                }
                            })
                    }
                })
        } else {
            swal({
                title: "Are you sure?",
                text: "Once submitted, your review for this entry cannot be changed anymore. ",
                icon: "warning",
                buttons: true,
                dangerMode: true,

            })
                .then((willDelete) => {
                    if (willDelete) {
                        axiosInstance.post(`${contestEndpoints.singleContest}${contestInfo.id}${contestEndpoints.contestEntry}${photoId}/rate`, review)
                            .catch((error) => {
                                if (error.response) {
                                    swal({
                                        title: "Oops!",
                                        text: "Something went wrong! Please try again.",
                                        icon: "error",
                                        button: "Okay"
                                    })
                                }
                            })
                            .then((response) => {
                                if (response) {
                                    handleClick();
                                    swal({
                                        title: "Success!",
                                        text: "Your review has been successfully submitted.",
                                        icon: "success",
                                        buttons: false,
                                        timer: 1500,
                                    })
                                }
                            })
                    }
                })
        }
    }

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
            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                transition disablePortal>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps}
                        timeout={350}>
                        <Box
                            boxShadow={2}
                            className={styles.paper}>
                            <Typography
                                id="discrete-slider-always"
                                gutterBottom className={styles.text}>
                                Please provide a score you find suitable for this photo's story/quality/creativeness. Available score values are from 1 (lowest) to 10 (highest).
                                </Typography>
                            <Rating
                                name="customized-10"
                                defaultValue={0}
                                max={10}
                                size="large"
                                value={score}
                                onChange={(ev) => setScore(ev.target.value)}
                            /><br></br>
                            <Typography
                                id="discrete-slider-always"
                                gutterBottom className={styles.text}>
                                Leave a comment for the author what you loved about the photo or what he can improve.
                                </Typography>
                            <TextField
                                className={styles.input}
                                label="Your comment"
                                name="comment"
                                rows={6}
                                multiline
                                variant="outlined"
                                type="text"
                                value={comment}
                                onChange={(ev) => setComment(ev.target.value)}
                            /><br></br>
                            <FormControlLabel
                                className={styles.text}
                                control={
                                    <Checkbox
                                        icon={<ErrorOutlineIcon size="medium" />}
                                        checkedIcon={<ErrorIcon size="medium" />}
                                        onChange={(ev) => setIsInappropriate(ev.target.checked)}
                                        value={isInappropriate}
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
                                onClick={handleSubmit}
                            >Rate photo</Button>
                            <Button
                                style={{ outline: 'none', marginLeft: "15px" }}
                                variant="contained"
                                color="secondary"
                                onClick={handleClick}
                            >Cancel</Button>
                        </Box>
                    </Fade>
                )}
            </Popper>
        </div>
    );
}

export default RatePhotoPopper;