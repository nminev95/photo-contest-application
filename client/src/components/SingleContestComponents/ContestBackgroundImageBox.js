import Box from '@material-ui/core/Box';
import background from '../../road.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
        [theme.breakpoints.up('md')]: {
            height: '400px',
            width: '100%',
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0
        },
        [theme.breakpoints.down('sm')]: {
            height: '350px',
            width: '100%',
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0
        }
    },
}));

const ContestBackgroundImageBox = () => {

    const styles = useStyles();

    return (
        <>
            <Box className={styles.image} />
        </>
    )
}

export default ContestBackgroundImageBox;