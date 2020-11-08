import { TextField } from "@material-ui/core";
import { useState } from "react";
import Form from 'react-bootstrap/Form'

const UploadPhotoForm = () => {

    
    return (
        <>
        <TextField>
            
        </TextField>
            <Form>
                <Form.File
                    id="custom-file"
                    label="Upload your amazing photo here"
                    custom
                />
            </Form>
        </>
    )
}

export default UploadPhotoForm;