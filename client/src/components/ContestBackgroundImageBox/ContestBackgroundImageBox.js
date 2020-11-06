import Box from '@material-ui/core/Box';
import background from '../../road.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    image: {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    },
});

const ContestBackgroundImageBox = () => {

    const styles = useStyles();

    return (
        <>
            <Box className={styles.image} width={1} height={400}>
            </Box>
        </>
    )
}

export default ContestBackgroundImageBox;