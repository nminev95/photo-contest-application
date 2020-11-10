import { FormControlLabel, Grid, Radio, RadioGroup, Slider, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useRef, useState } from "react";
import Form from 'react-bootstrap/Form'
import axios from "../../requests/axios";

const useStyles = makeStyles((theme) => ({
    inputField: {
        marginTop: '30px',
        marginBottom: '10px',
        width: '32vw',
        [theme.breakpoints.only('xs')]: {
            width: '70vw',
        },
        [theme.breakpoints.only('sm')]: {
            width: '50vw',
        },
        [theme.breakpoints.only('md')]: {
            width: '40vw',
        }
    }
}))

const CreateContestForm = () => {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [file, setFile] = useState(null);
    const styles = useStyles();
    const inputRef = useRef();

    const firstPhaseSliderMarks = [
        {
            value: 1,
            label: '1 day',
        },
        {
            value: 30,
            label: '1 month',
        },
    ];

    const secondPhaseSliderMarks = [
        {
            value: 1,
            label: '1 hour',
        },
        {
            value: 24,
            label: '24 hours',
        },
    ];

    return (
        <div>
            <TextField
                className={styles.inputField}
                label="Contest title"
                name="title"
                variant="outlined"
                type="text"
                onChange={(ev) => setTitle(ev.target.value)}
            />
            <TextField
                className={styles.inputField}
                label="Description"
                name="description"
                rows={8}
                multiline
                variant="outlined"
                type="text"
                onChange={(ev) => setDescription(ev.target.value)}
            />
            <Typography id="discrete-slider-always" gutterBottom style={{marginTop: "25px"}}>
                Select how long your will contest accept photo entries:
            </Typography>
            <Slider
                className={styles.inputField}
                defaultValue={1}
                min={1}
                max={30}
                aria-labelledby="discrete-slider-always"
                step={1}
                marks={firstPhaseSliderMarks}
                valueLabelDisplay="on"
            />
            <Typography id="discrete-slider-always" gutterBottom>
                Select how long your will contest accept photo entries:
            </Typography>
            <Slider
                className={styles.inputField}
                defaultValue={1}
                min={1}
                max={24}
                aria-labelledby="discrete-slider-always"
                step={1}
                marks={secondPhaseSliderMarks}
                valueLabelDisplay="on"
            />
            <Typography id="discrete-slider-always" gutterBottom>
                Select entry restrictions:
            </Typography>
            <RadioGroup style={{ justifyContent: "center" }} row aria-label="position" name="position" defaultValue="open" >
                <FormControlLabel
                    value="open"
                    control={<Radio color="primary" />}
                    label="Open"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="Invitations only"
                    control={<Radio color="primary" />}
                    label="Invitations only"
                    labelPlacement="start"
                />
            </RadioGroup>
            <Form.Label>Participants limit</Form.Label>
            <Form.Control as="select" size="sm" custom>
                <option>25</option>
                <option>50</option>
                <option>75</option>
                <option>100</option>
            </Form.Control>
            <Form.Label>Select contest category</Form.Label>
            <Form.Control as="select" size="sm" custom>
                <option>category1</option>
                <option>category2</option>
                <option>category3</option>
                <option>category4</option>
            </Form.Control>
            
            <Form style={{ marginTop: '30px' }}>
                <Form.File
                    className={styles.inputField}
                    onChange={() => setFile(inputRef.current.files[0])}
                    ref={inputRef}
                    id="custom-file"
                    label="Upload a cover image for your contest"
                    custom
                />
            </Form>

        </div>
    )
}

export default CreateContestForm;