import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    image: {
        [theme.breakpoints.up('md')]: {
            height: '400px',
            width: '100%',
            backgroundImage: `url(http://localhost:4000/public/contest-covers/black-and-white-cover.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
            opacity: '0.9',
        },
        [theme.breakpoints.down('sm')]: {
            height: '350px',
            width: '100%',
            backgroundImage: `url(http://localhost:4000/public/contest-covers/black-and-white-cover.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
            opacity: '0.9',
        }
    },
}));


const ImageBox = () => {
   
    const styles = useStyles();

    return (
        <>
            <Box className={styles.image} />
        </>
    )
}

export default ImageBox;