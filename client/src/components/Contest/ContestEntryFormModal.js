import { Button } from "@material-ui/core";
import { useState, useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Form from 'react-bootstrap/Form';
import { withRouter } from 'react-router-dom';
import swal from '@sweetalert/with-react';
import axios from '../../requests/axios';
import contestEndpoints from '../../requests/contest-requests';

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

    const { id } = props.match.params;
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [file, setFile] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const contestInfo = useSelector(state => state.singleContestState)
    const styles = useStyles();
    const inputRef = useRef();
    
    const formData = new FormData();
    formData.set('image', file);
    formData.set('title', title);
    formData.set('description', description)
    
    //   const photoData = {
    //         title: title,
    //         description: description,
    //         file: formData.get('image')
    //   } 
        
    
    const handleSubmit = (ev) => {
        ev.preventDefault();

        axios.post(contestEndpoints.addNewPhoto + `${id}`,formData)
            .catch((error) => {
                if (error.response) {
                    swal({
                        title: "Oops!",
                        text: "Something went wrong!",
                        icon: "error",
                        button: "Okay"
                    })
                }
            })
            .then((response) => {
                if (response) {
                    swal({
                        title: "Success!",
                        text: "Your photo has been uploaded successfully!",
                        icon: "success",
                        button: "Ок"
                    })
                }
            })
    }


    return (
        <>
            {contestInfo.phase_id === 1 ? (
                <Button variant="contained" color="primary" onClick={handleShow}>
                    Enter competition
                </Button>
            ) : (
                    <Button disabled variant="contained" color="primary" onClick={handleShow}>
                        Enter competition
                    </Button>
                )}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload your entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    In order to participate in the contest, you must enter a title for your photo and describe the story behind it.
                    When done, simply upload your desired photo and submit your entry.
                    <div>
                        <TextField
                            className={styles.inputField}
                            label="Photo title"
                            name="title"
                            variant="outlined"
                            type="text"
                            onChange={(ev) => setTitle(ev.target.value)}
                        />
                        <TextField
                            className={styles.inputField}
                            label="Story behind photo"
                            name="description"
                            rows={6}
                            multiline
                            variant="outlined"
                            type="text"
                            onChange={(ev) => setDescription(ev.target.value)}
                        />
                        <Form style={{ marginTop: '30px' }}>
                            <Form.File
                                onChange={() => setFile(inputRef.current.files[0])}
                                ref={inputRef}
                                id="custom-file"
                                label="Upload your amazing photo here"
                                custom
                            />
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Submit entry</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default withRouter(OpenEntryFormButton);