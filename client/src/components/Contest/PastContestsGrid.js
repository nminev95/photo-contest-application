import { makeStyles } from '@material-ui/core/styles';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
    container: {
        lineHeight: 0,
        width: '50%',
        margin: 'auto',
        WebkitColumnCount: 4,
        WebkitColumnGap: '15px',
        MozColumnCount: 4,
        MozColumnGap: '5px',
        columnCount: 4,
        columnGap: '5px',
        [theme.breakpoints.up('lg')]: {
            MozColumnCount: 4,
            WebkitColumnCount: 4,
            columnCount: 4,
        },
        [theme.breakpoints.only('md')]: {
            MozColumnCount: 3,
            WebkitColumnCount: 3,
            columnCount: 3,
        },
        [theme.breakpoints.only('sm')]: {
            MozColumnCount: 2,
            WebkitColumnCount: 2,
            columnCount: 2,
        },
        [theme.breakpoints.only('xs')]: {
            MozColumnCount: 1,
            WebkitColumnCount: 1,
            columnCount: 1,
        },
    },
    imageDiv: {
        position: 'relative',
        width: '100%',
        transition: '0.5s all ease-in-out',
    },
    image: {
        width: '100% !important',
        height: 'auto !important',
        marginTop: '25px',
        transition: '0.5s all ease-in-out',
        '&:hover': {
            opacity: '0.8',
        },
    },
    text: {
        height: 25,
        display: "flex",
        position: "relative",
        textAlign: "left",
        color: "white",
        marginTop: "35px",
    },
    bar: {
        height: theme.spacing(12),
        background:
            'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
    },
}));

const PastContestsGrid = (props) => {

    const { contestsData } = props;
    const styles = useStyles();
    
    return (

        <div className={styles.container}>
            {contestsData && contestsData.map(contest => {
                return (
                    <div key={contest.id} className={styles.imageDiv}>
                        <img
                            className={styles.image}
                            alt={contest.title}
                            src={`http://localhost:4000/public/contest-covers/${contest.contestCover}`}
                        />
                        <GridListTileBar title={contest.title} classes={{
                            root: styles.bar,
                            title: styles.text,
                        }}>
                        </GridListTileBar>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default PastContestsGrid;