import Modal from 'react-bootstrap/Modal'
import { Button } from "@material-ui/core";
import { useState } from 'react'
import CreateContestForm from './CreateContestForm';

const OpenCreateContestFormButton = ({ handleCloseMenu }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                style={{ outline: 'none' }}
                variant="contained"
                color="primary"
                onClick={() => {
                    handleShow();
                    handleCloseMenu();
                }}>
                Create contest
            </Button>
            <Modal
                style={{ overflow: 'inherit' }}
                show={show}
                scrollable={true}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size='lg'
            >
                <Modal.Header
                    closeButton>
                    <Modal.Title>
                        Create a new contest
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You have almost organized your contest! You just need to specify the title, the category it belongs to, a description for the contest
                    and set up the contest limitations and restrictions.
                    <CreateContestForm
                        handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default OpenCreateContestFormButton;