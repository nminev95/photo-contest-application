import { Avatar, FormControlLabel, Grid, Paper, Radio, RadioGroup, Slider, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useRef, useState } from "react";
import Form from 'react-bootstrap/Form'
import axios from "../../requests/axios";
import Autocomplete from '@material-ui/lab/Autocomplete';
import contestEndpoints from "../../requests/contest-requests";
import userEndpoints from "../../requests/user-requests";
import swal from "sweetalert";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { contestDescriptionError, contestTitleError } from "../../validations/helper-errors";

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
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight: '15px'
    },
}))

const CreateContestForm = () => {
    const [categories, setCategories] = useState([]);
    const [highLevelUsers, setHighLevelUsers] = useState([]);
    const styles = useStyles();
    const inputRef = useRef();
    const [contestForm, setContestForm] = useState({
        title: {
            name: 'title',
            value: '',
            valid: true,
            error: contestTitleError,
            validators: {
                required: true,
                minLen: 4,
                maxLen: 30
            }
        },
        description: {
            name: 'description',
            value: '',
            valid: true,
            error: contestDescriptionError,
            validators: {
                required: true,
                minLen: 50,
                maxLen: 250
            }
        },
        firstPhaseLimit: {
            name: 'firstPhaseSlider',
            value: 1,
            valid: true,
        },
        secondPhaseLimit: {
            name: 'secondPhaseSlider',
            value: 1,
            valid: true,
        },
        restrictions: {
            name: 'restrictions',
            value: 'Open',
            valid: true,
            validators: {}
        },
        limit: {
            name: 'limit',
            value: 25,
            valid: true,
            validators: {}
        },
        category: {
            name: 'category',
            value: '',
            valud: true,
            validators: {}
        }
    })

    useEffect(() => {
        axios.get(contestEndpoints.getAllCategories)
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
            .then((response) => setCategories(response.data))
    }, [])

    useEffect(() => {
        axios.get(userEndpoints.getHighLevelUsers)
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
            .then((response) => setHighLevelUsers(response.data))
    }, [])

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

    const handleFirstSliderChange = (ev, newValue) => {
        const copyControl = { ...contestForm.firstPhaseLimit };
        copyControl.value = newValue;
        setContestForm({ ...contestForm, firstPhaseLimit: copyControl });
    }

    const handleSecondSliderChange = (ev, newValue) => {
        const copyControl = { ...contestForm.secondPhaseLimit };
        copyControl.value = newValue;
        setContestForm({ ...contestForm, secondPhaseLimit: copyControl });
    }

    const handleChange = (ev) => {

        console.log(ev)
        const { name, value } = ev.target;
        const copyControl = { ...contestForm[name] };
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

        if (copyControl.validators.regex) {
            copyControl.valid =
                copyControl.valid &&
                copyControl.validators.regex.test(copyControl.value)
        }

        setContestForm({ ...contestForm, [name]: copyControl });
    };
    console.log(contestForm)
    return (
        <div>
            {contestForm.title.valid ? (
                <TextField
                    className={styles.inputField}
                    label="Contest title"
                    name="title"
                    variant="outlined"
                    type="text"
                    value={contestForm.title.value}
                    onChange={handleChange}
                />
            ) : (
                    <TextField
                        className={styles.inputField}
                        label="Contest title"
                        name="title"
                        variant="outlined"
                        type="text"
                        value={contestForm.title.value}
                        onChange={handleChange}
                        error
                        helperText={contestForm.title.error}
                    />
                )}
            {contestForm.description.valid ? (
                <TextField
                    className={styles.inputField}
                    label="Description"
                    name="description"
                    rows={8}
                    multiline
                    variant="outlined"
                    type="text"
                    value={contestForm.description.value}
                    onChange={handleChange}
                />
            ) : (
                    <TextField
                        className={styles.inputField}
                        label="Description"
                        name="description"
                        rows={8}
                        multiline
                        variant="outlined"
                        type="text"
                        value={contestForm.description.value}
                        onChange={handleChange}
                        error
                        helperText={contestForm.description.error}
                    />
                )}
            <Typography id="discrete-slider-always" gutterBottom style={{ marginTop: "25px" }}>
                Select how long your will contest accept photo entries:
            </Typography>
            <Slider
                className={styles.inputField}
                defaultValue={1}
                min={1}
                max={30}
                value={contestForm.firstPhaseLimit.value}
                onChange={handleFirstSliderChange}
                name="firstPhaseSlider"
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
                value={contestForm.secondPhaseLimit.value}
                onChange={handleSecondSliderChange}
                name="secondPhaseSlider"
                aria-labelledby="discrete-slider-always"
                step={1}
                marks={secondPhaseSliderMarks}
                valueLabelDisplay="on"
            />
            <Typography style={{ marginTop: '20px' }} id="discrete-slider-always" gutterBottom>
                Select entry restrictions:
            </Typography>
            <RadioGroup style={{ justifyContent: "center" }}
                row aria-label="position"
                name="restrictions"
                value={contestForm.restrictions.value}
                onChange={handleChange}>
                <FormControlLabel
                    value="Open"
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
            <Grid container spacing={3} style={{ justifyContent: "center", marginTop: "10px" }}>
                <Grid item xs={3}>
                    <Form.Label>Participants limit</Form.Label>
                    <Form.Control
                        as="select"
                        size="sm"
                        custom
                        name="limit"
                        value={contestForm.limit.value}
                        onChange={handleChange}>
                        <option>25</option>
                        <option>50</option>
                        <option>75</option>
                        <option>100</option>
                    </Form.Control>
                </Grid>
                <Grid item xs={3}>
                    <Form.Label>Select contest category</Form.Label>
                    <Form.Control
                        as="select"
                        size="sm"
                        custom
                        name="category"
                        value={contestForm.category.value}
                        onChange={handleChange}>
                        {categories && categories.map((category) => <option key={category.type}>{category.type}</option>)}
                    </Form.Control>
                </Grid>
            </Grid>
            <Typography style={{ marginTop: '35px' }} id="discrete-slider-always" gutterBottom>
                By default, all organizers are judges. You can send out additional jury invitations to high-ranked photographers:
            </Typography>
            <Autocomplete
                multiple
                limitTags={3}
                id="multiple-limit-tags"
                options={highLevelUsers}
                getOptionLabel={(user) => user.username}
                renderOption={(user) => (
                    <>
                        <Avatar alt={user.username} src={`http://localhost:4000/public/avatars/${user.avatar}`} className={styles.small} />
                        <span>{user.username}</span>
                        <span style={{ float: "inline-end" }}>{user.rank === 3 ?
                            (<><StarIcon style={{ color: "#ffb300" }} /><StarIcon style={{ color: "#ffb300" }} /><StarIcon style={{ color: "#ffb300" }} /><StarBorderIcon style={{ color: "#ffb300" }} /></>
                            ) : (
                                <><StarIcon style={{ color: "#ffb300" }} /><StarIcon style={{ color: "#ffb300" }} /><StarIcon style={{ color: "#ffb300" }} /><StarIcon style={{ color: "#ffb300" }} /></>
                            )}</span>
                    </>
                )}
                renderInput={(params) => (
                    <TextField {...params}
                        variant="outlined"
                        label="Contest jury"
                        placeholder="Send jury invitations"
                        className={styles.inputField} />
                )}
            />
            <Form style={{ marginTop: '30px' }}>
                <Form.File
                    className={styles.inputField}
                    // onChange={() => setFile(inputRef.current.files[0])}
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