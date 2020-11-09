import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRef, useState } from "react";

import Form from 'react-bootstrap/Form'

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

const UploadPhotoForm = () => {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [file, setFile] = useState(null);
    const styles = useStyles();
    const inputRef = useRef();
    
    return (
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
            <Form style={{marginTop: '30px'}}>
                <Form.File
                    onChange={() => setFile(inputRef.current.files[0])}
                    ref={inputRef}
                    id="custom-file"
                    label="Upload your amazing photo here"
                    custom
                />
            </Form>
        </div>
    )
}

export default UploadPhotoForm;