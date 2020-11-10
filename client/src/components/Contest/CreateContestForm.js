import { FormControlLabel, Grid, Radio, RadioGroup, Slider, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useRef, useState } from "react";
import Form from 'react-bootstrap/Form'
import axios from "../../requests/axios";
import Autocomplete from '@material-ui/lab/Autocomplete';
import contestEndpoints from "../../requests/contest-requests";
import swal from "sweetalert";

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

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];

const CreateContestForm = () => {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState([]);
    const styles = useStyles();
    const inputRef = useRef();

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
            <Typography id="discrete-slider-always" gutterBottom style={{ marginTop: "25px" }}>
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
            <Typography style={{marginTop: '20px'}} id="discrete-slider-always" gutterBottom>
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
            <Grid container spacing={3} style={{justifyContent: "center", marginTop: "10px"}}>
            <Grid item xs={3}>
            <Form.Label>Participants limit</Form.Label>
            <Form.Control as="select" size="sm" custom>
                <option>25</option>
                <option>50</option>
                <option>75</option>
                <option>100</option>
            </Form.Control>
            </Grid>
            <Grid item xs={3}>
            <Form.Label>Select contest category</Form.Label>
            <Form.Control as="select" size="sm" custom>
                {categories && categories.map((category) => <option key={category.type}>{category.type}</option>)}
            </Form.Control>
            </Grid>
            </Grid>
            <Typography style={{marginTop: '35px'}} id="discrete-slider-always" gutterBottom>
                By default, all organizers are judges. You can send out additional jury invitations to high-ranked photographers 
            </Typography>
            <Autocomplete
                multiple
                limitTags={3}
                id="multiple-limit-tags"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <TextField {...params} variant="outlined" label="Contest jury" placeholder="Send jury invitations" className={styles.inputField} />
                )}
            />
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