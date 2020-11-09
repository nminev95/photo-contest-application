import { Button} from "@material-ui/core";
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useSelector } from "react-redux";
import UploadPhotoForm from "./UploadPhotoForm";

const OpenEntryFormButton = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const contestInfo = useSelector(state => state.singleContestState)

    return (
        <>
            {contestInfo.phase_id === 1 ? (
                <Button style={{outline: 'none'}} variant="contained" color="primary" onClick={handleShow}>
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
                    <UploadPhotoForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{outline: 'none'}} v variant="contained" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button style={{outline: 'none'}} v variant="contained" color="primary">Submit entry</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default OpenEntryFormButton;