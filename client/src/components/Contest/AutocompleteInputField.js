import { Avatar, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Autocomplete from "@material-ui/lab/Autocomplete";

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

const AutocompleteInputField = ({ users, value, handleValueChange, placeholder, label }) => {

    const styles = useStyles();

    const renderRank = (rank) => {
        switch (true) {
            case (+rank === 1):
                return (
                    <>
                        <StarIcon
                            style={{ color: "#ffb300" }} />
                        <StarBorderIcon
                            style={{ color: "#ffb300" }} />
                        <StarBorderIcon
                            style={{ color: "#ffb300" }} />
                        <StarBorderIcon
                            style={{ color: "#ffb300" }} />
                    </>
                )
            case (+rank === 2):
                return (
                    <>
                        <StarIcon
                            style={{ color: "#ffb300" }} />
                        <StarIcon
                            style={{ color: "#ffb300" }} />
                        <StarBorderIcon
                            style={{ color: "#ffb300" }} />
                        <StarBorderIcon
                            style={{ color: "#ffb300" }} />
                    </>
                )
            case (+rank === 3):
                return (
                    <>
                        <StarIcon
                            style={{ color: "#ffb300" }} />
                        <StarIcon
                            style={{ color: "#ffb300" }} />
                        <StarIcon
                            style={{ color: "#ffb300" }} />
                        <StarBorderIcon
                            style={{ color: "#ffb300" }} />
                    </>
                )
            default:
                return (
                    <>
                        <StarIcon
                            style={{ color: "#ffb300" }} />
                        <StarIcon
                            style={{ color: "#ffb300" }} />
                        <StarIcon
                            style={{ color: "#ffb300" }} />
                        <StarIcon
                            style={{ color: "#ffb300" }} />
                    </>
                )
        }
    }   

    console.log(users)
    return (
        <Autocomplete
            multiple
            limitTags={3}
            name="jury"
            id="multiple-limit-tags"
            disableCloseOnSelect
            filterSelectedOptions={true}
            options={users}
            getOptionLabel={(user) => user.username}
            value={value}
            onChange={handleValueChange}
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
                        style={{ float: "inline-end" }}>{renderRank(user.rank)}</span>
                </>
            )}
            renderInput={(params) => (
                <TextField {...params}
                    variant="outlined"
                    label={label}
                    placeholder={placeholder}
                    className={styles.inputField} />
            )}
        />
    )
}

export default AutocompleteInputField;