import { useDispatch, useSelector } from "react-redux";
import { setContestDetails } from "../../redux/actions";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from 'react-router-dom';
import { TextField } from "@material-ui/core";
import { useState } from 'react'
import { Button } from "@material-ui/core";
import ImageDropAndUpload from "./ImageDropAndUpload";
import axiosInstance from "../../requests/axios";
import Modal from 'react-bootstrap/Modal'
import swal from '@sweetalert/with-react';

const useStyles = makeStyles((theme) => ({
    inputField: {
        marginTop: '30px',
        marginBottom: '10px',
        width: '30vw',
        [theme.breakpoints.only('xs')]: {
            width: '60vw',
        },
        [theme.breakpoints.only('sm')]: {
            width: '40vw',
        },
        [theme.breakpoints.only('md')]: {
            width: '40vw',
        }
    }
}))

const OpenEntryFormButton = (props) => {

    const { upload } = props;
    const { id } = props.match.params;
    const [show, setShow] = useState(false);
    const [file, setFile] = useState([]);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const userState = useSelector(state => state.loginState);
    const contestInfo = useSelector(state => state.singleContestState)
    const userInfo = useSelector(state => state.loginState)
    const entries = contestInfo.entries;
    const jury = contestInfo.jury;
    const enrolledUsers = contestInfo.enrolled;
    const styles = useStyles();

    const [photoData, setPhotoData] = useState({
        title: {
            value: '',
            valid: true,
            name: 'title',
            validators: {
                required: true,
                minLen: 4,
                maxLen: 25,
            }
        },
        description: {
            value: '',
            valid: true,
            name: 'description',
            validators: {
                required: true,
                minLen: 20,
                maxLen: 240,
            }
        },
        file: {
            value: '',
            valid: false,
            name: 'file',
            validators: {
                required: true,
            }
        }
    })

    const handleChange = (ev) => {
        const { name, value } = ev.target;

        const copyControl = { ...photoData[name] };
        copyControl.value = value;
        copyControl.valid = true;

        if (copyControl.validators.required) {
            copyControl.valid = copyControl.valid && copyControl.value.length >= 1;
        }

        if (copyControl.validators.minLen) {
            copyControl.valid =
                copyControl.valid &&
                copyControl.value.length >= copyControl.validators.minLen;
        }

        if (copyControl.validators.maxLen) {
            copyControl.valid =
                copyControl.valid &&
                copyControl.value.length <= copyControl.validators.maxLen;
        }

        setPhotoData({ ...photoData, [name]: copyControl });
    };

    const formData = new FormData();
    formData.set('image', file[0]);
    formData.set('title', photoData.title.value);
    formData.set('description', photoData.description.value);

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (!photoData.title.valid || !photoData.description.valid || !file) {
            return;
        }

        swal({
            title: "Are you sure?",
            text: "Once submitted, your entry cannot be changed by any means.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((isTrue) => {
            const copy = { ...contestInfo }
            copy.entries.push({
                title: photoData.title.value,
                description: photoData.description.value,
                image: file[0],
            })
            dispatch(setContestDetails(copy))
            if (isTrue) {
                upload(formData, id);
                handleClose();
            }
        })
    };

    const handleEnroll = () => {
        axiosInstance.post(`http://localhost:4000/contests/${contestInfo.id}/enrolled`)
            .catch((error) => {
                if (error.response.status > 300) {
                    swal({
                        title: "Oops!",
                        text: "Something went wrong.",
                        icon: "error",
                        button: "Go back"
                    })
                }
            })
            .then(() => {
                swal({
                    title: "Success!",
                    text: "You have registered for this contest succesfully.",
                    icon: "success",
                    button: false,
                    timer: 1500
                })
                const copy = [...contestInfo.enrolled]
                copy.push(
                    {
                        user_id: userInfo.user.sub,
                        contest_id: contestInfo.id
                    })
                dispatch(setContestDetails({
                    ...contestInfo,
                    enrolled: copy
                }))
            })
    }

    const handleLeave = () => {
        swal({
            title: "Are you sure?",
            text: "By cancelling your registration, you risk someone else taking your spot in the contest.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((isTrue) => {
            if (isTrue) {
                axiosInstance.delete(`http://localhost:4000/contests/${contestInfo.id}/enrolled`)
                    .catch((error) => {
                        if (error.response.status > 300) {
                            swal({
                                title: "Oops!",
                                text: "Something went wrong.",
                                icon: "error",
                                button: "Go back"
                            })
                        }
                    })
                    .then(() => {
                        const filteredEnrolls = contestInfo.enrolled.filter((enroll) => enroll.user_id !== userInfo.user.sub && enroll.contest_id !== contestInfo.id);
                        dispatch(setContestDetails({
                            ...contestInfo,
                            enrolled: filteredEnrolls
                        }))
                    })
            }
            swal({
                title: "Success!",
                text: "You have succesfully been removed from the contest.",
                icon: "success",
                button: false,
                timer: 1500
            })
        })
    }

    const renderEnterContestButton = () => {
        switch (true) {
            case (contestInfo.phase_id === 3):
                return (
                    <Button
                        style={{ outline: 'none' }}
                        variant="contained"
                        disabled
                        color="primary">
                        Contest finished
                    </Button>
                )
            case (entries && entries.some(entry => entry.user_id === userInfo.user.sub)):
                return (
                    <Button
                        variant="contained"
                        disabled
                        color="primary">
                        You have already entered
                    </Button>
                )
            case (userInfo.user.role === 'Organizer'):
                return;
            case (contestInfo.phase_id === 1 && enrolledUsers.some((user) => user.user_id === userInfo.user.sub && contestInfo.restrictions_id === 1)):
                return (
                    <Button
                        style={{ outline: 'none', marginRight: '10px' }}
                        variant="contained"
                        color="primary"
                        onClick={handleShow}>
                        Upload photo
                    </Button>
                )
            case (contestInfo.phase_id === 1 && enrolledUsers.some((user) => user.user_id === userInfo.user.sub && contestInfo.restrictions_id === 2)):
                return (
                    <Button
                        style={{ outline: 'none' }}
                        variant="contained"
                        color="primary"
                        onClick={handleShow}>
                        Upload photo
                    </Button>
                )
            default:
                return;
        }
    }

    const renderEnrollButton = () => {

        switch (true) {
            case (entries && entries.some(entry => entry.user_id === userInfo.user.sub) || (contestInfo && contestInfo.restrictions_id === 2)):
                return;
            case (jury && jury.some(jury => jury.id === userInfo.user.sub)):
                return;
            case (enrolledUsers && enrolledUsers.some((user) => user.user_id === userInfo.user.sub)):
                return (
                    <Button
                        style={{ outline: 'none' }}
                        variant="contained"
                        color="primary"
                        onClick={handleLeave}
                    >Leave</Button>
                )
            default:
                return (
                    <Button
                        style={{ outline: 'none' }}
                        variant="contained"
                        color="primary"
                        onClick={handleEnroll}
                    >Enroll me</Button>
                )
        }
    }

    return (
        <>
            {userState.user.role === 'Photo Junkie' && renderEnterContestButton()}
            {userState.user.role === 'Photo Junkie' && renderEnrollButton()}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Upload your entry
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    In order to participate in the contest, you must enter a title for your photo and describe the story behind it.
                    When done, simply upload your desired photo and submit your entry.
                    <div style={{ textAlign: '-webkit-center' }}>
                        {photoData.title.valid ? (
                            <TextField
                                className={styles.inputField}
                                label="Photo title"
                                name="title"
                                variant="outlined"
                                type="text"
                                onChange={handleChange}
                            />
                        ) : (
                                <TextField
                                    className={styles.inputField}
                                    label="Photo title"
                                    name="title"
                                    variant="outlined"
                                    type="text"
                                    onChange={handleChange}
                                    error
                                    helperText="Photo title must be between 4 and 25 characters long."
                                />
                            )}
                        {photoData.description.valid ? (
                            <TextField
                                className={styles.inputField}
                                label="Story behind photo"
                                name="description"
                                rows={6}
                                multiline
                                variant="outlined"
                                type="text"
                                onChange={handleChange}
                            />
                        ) : (
                                <TextField
                                    className={styles.inputField}
                                    label="Story behind photo"
                                    name="description"
                                    rows={6}
                                    multiline
                                    variant="outlined"
                                    type="text"
                                    onChange={handleChange}
                                    error
                                    helperText="Photo description must be between 20 and 240 characters long."
                                />
                            )}
                        <ImageDropAndUpload file={file} setFile={setFile} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        Submit entry
                    </Button>
                    <Button
                        style={{ outline: 'none', marginLeft: "15px" }}
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            handleClose()
                            setFile([]);
                        }}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default withRouter(OpenEntryFormButton);