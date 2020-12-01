import { Avatar, Button, FormControlLabel, Grid, Radio, RadioGroup, Slider, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import axiosInstance from "../../requests/axios";
import Autocomplete from '@material-ui/lab/Autocomplete';
import contestEndpoints from "../../requests/contest-requests";
import userEndpoints from "../../requests/user-requests";
import swal from "sweetalert";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { contestCategoryError, contestTitleError } from "../../validations/helper-errors";
import ImageDropAndUpload from "./ImageDropAndUpload";
import { socket } from "../../App";
import { useSelector } from "react-redux";

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

const CreateContestForm = ({ handleClose }) => {

    const [highLevelUsers, setHighLevelUsers] = useState([]);
    const [contestCover, setContestCover] = useState([]);
    const userId = useSelector(state => state.loginState.user.sub);
    const styles = useStyles();
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
        category: {
            name: 'category',
            value: '',
            valid: true,
            error: contestCategoryError,
            validators: {
                required: true,
                minLen: 6,
                maxLen: 200
            }
        },
        firstPhaseLimit: {
            name: 'firstPhaseLimit',
            value: 1,
            valid: true
        },
        secondPhaseLimit: {
            name: 'secondPhaseLimit',
            value: 1,
            valid: true
        },
        restrictions: {
            name: 'restrictions',
            value: 'Open',
            valid: true,
            validators: {}
        },
        spots: {
            name: 'spots',
            value: 25,
            valid: true,
            validators: {}
        },
        jury: {
            name: 'jury',
            value: [],
            valid: true,
            validators: {}
        }
    })

    useEffect(() => {
        axiosInstance.get(userEndpoints.getHighLevelUsers)
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


    const firstPhaseLimitMarks = [
        {
            value: 1,
            label: '1 day',
        },
        {
            value: 30,
            label: '1 month',
        },
    ];

    const secondPhaseLimitMarks = [
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

    const handleJurySelect = (ev, newValue) => {
        const copyControl = { ...contestForm.jury };
        copyControl.value = newValue;
        setContestForm({ ...contestForm, jury: copyControl });
    }

    const handleChange = (ev) => {

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

    const handleSubmit = (ev) => {

        if (!contestForm.title.valid || !contestForm.category.valid || !contestCover) {
            return;
        }

        const contestData = Object.values(contestForm).reduce((data, input) => {
            if (Array.isArray(input.value)) {
                const jsonArray = JSON.stringify(input.value);
                console.log(userId)
                data.set(input.name, jsonArray);
            } else {
                data.set(input.name, input.value);
            }
            return data
        }, new FormData());
        contestData.set('image', contestCover[0]);
          
        swal({
            title: "Are you sure?",
            text: "Once created, your contest cannot be changed anymore. ",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosInstance.post(contestEndpoints.createContest, contestData)
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
                                socket.emit('new_jury_invitations', JSON.stringify(response.data.jury), JSON.stringify(userId));
                                console.log(response)
                                swal({
                                    title: "Success!",
                                    text: "Your contest was successfully created.",
                                    icon: "success",
                                    button: false,
                                    timer: 1500
                                })
                            }
                        })
                        .then(() => {
                            handleClose()
                        })
                }
            })
    }

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
            {contestForm.category.valid ? (
                <TextField
                    className={styles.inputField}
                    label="Category"
                    name="category"
                    rows={2}
                    multiline
                    variant="outlined"
                    type="text"
                    value={contestForm.category.value}
                    onChange={handleChange}
                />
            ) : (
                    <TextField
                        className={styles.inputField}
                        label="Category"
                        name="category"
                        rows={2}
                        multiline
                        variant="outlined"
                        type="text"
                        value={contestForm.category.value}
                        onChange={handleChange}
                        error
                        helperText={contestForm.category.error}
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
                name="firstPhaseLimit"
                aria-labelledby="discrete-slider-always"
                step={1}
                marks={firstPhaseLimitMarks}
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
                name="secondPhaseLimit"
                aria-labelledby="discrete-slider-always"
                step={1}
                marks={secondPhaseLimitMarks}
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
            <Grid
                container
                spacing={3}
                style={{ justifyContent: "center", marginTop: "10px" }}>
                <Grid
                    item
                    xs={3}>
                    <Form.Label>
                        Participants limit
                        </Form.Label>
                    <Form.Control
                        as="select"
                        size="sm"
                        custom
                        name="spots"
                        value={contestForm.spots.value}
                        onChange={handleChange}>
                        <option>25</option>
                        <option>50</option>
                        <option>75</option>
                        <option>100</option>
                    </Form.Control>
                </Grid>
            </Grid>
            <Typography
                style={{ marginTop: '35px' }}
                id="discrete-slider-always"
                gutterBottom>
                By default, all organizers are judges. You can send out additional jury invitations to high-ranked photographers:
            </Typography>
            <Autocomplete
                multiple
                limitTags={3}
                name="jury"
                id="multiple-limit-tags"
                disableCloseOnSelect
                filterSelectedOptions={true}
                options={highLevelUsers}
                getOptionLabel={(user) => user.username}
                value={contestForm.jury.value}
                onChange={handleJurySelect}
                renderOption={(user) => (
                    <>
                        <Avatar
                            alt={user.username}
                            src={`http://localhost:4000/public/avatars/${user.avatar}`}
                            className={styles.small} />
                        <span>
                            {user.username}
                        </span>
                        <span
                            style={{ float: "inline-end" }}>{user.rank === 3 ?
                                (<><StarIcon
                                    style={{ color: "#ffb300" }} />
                                    <StarIcon
                                        style={{ color: "#ffb300" }} />
                                    <StarIcon
                                        style={{ color: "#ffb300" }} />
                                    <StarBorderIcon
                                        style={{ color: "#ffb300" }} /></>
                                ) : (
                                    <>
                                        <StarIcon
                                            style={{ color: "#ffb300" }} />
                                        <StarIcon
                                            style={{ color: "#ffb300" }} />
                                        <StarIcon
                                            style={{ color: "#ffb300" }} />
                                        <StarIcon
                                            style={{ color: "#ffb300" }} /></>
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
            <ImageDropAndUpload file={contestCover} setFile={setContestCover} />
            <div
                style={{ float: 'right' }}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ outline: 'none' }}
                    onClick={handleSubmit}>
                    Create contest
                    </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClose}
                    style={{ outline: 'none', marginLeft: "15px" }}>
                    Cancel
            </Button>
            </div>
        </div>
    )
}

export default CreateContestForm;