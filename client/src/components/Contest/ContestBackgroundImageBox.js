import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const ContestBackgroundImageBox = ({ image }) => {
    
    const useStyles = makeStyles((theme) => ({
        image: {
            [theme.breakpoints.up('md')]: {
                height: '400px',
                width: '100%',
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 0
            },
            [theme.breakpoints.down('sm')]: {
                height: '350px',
                width: '100%',
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 0
            }
        },
    }));

    const styles = useStyles();

    return (
        <>
            <Box className={styles.image} />
        </>
    )
}

export default ContestBackgroundImageBox;