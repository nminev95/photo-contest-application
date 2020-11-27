import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const ContestBackgroundImageBox = () => {

    const contestInfo = useSelector(state => state.singleContestState);
    const useStyles = makeStyles((theme) => ({
        image: {
            [theme.breakpoints.up('md')]: {
                height: '500px',
                width: '100%',
                backgroundImage: `url(http://localhost:4000/public/${contestInfo.contestCover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 0
            },
            [theme.breakpoints.down('sm')]: {
                height: '450px',
                width: '100%',
                backgroundImage: `url(http://localhost:4000/public/${contestInfo.contestCover})`,
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