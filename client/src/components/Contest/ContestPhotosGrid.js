import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        lineHeight: 0,
        width: '80%',
        margin: 'auto',
        WebkitColumnCount: 5,
        WebkitColumnGap: '4px',
        MozColumnCount: 5,
        MozColumnGap: '4px',
        columnCount: 5,
        columnGap: '4px',
        [theme.breakpoints.only('lg')]: {
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
    image: {
        width: '100% !important',
        height: 'auto !important',
        margin: '2px 0 2px 2px'
    }
}))

const ContestPhotosGrid = () => {

    const styles = useStyles();
    return (

        <div className={styles.container}>
            <img src="https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg" className={styles.image}></img>
            <img src="https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg" className={styles.image}></img>
            <img src="https://www.w3schools.com/w3images/rocks.jpg" className={styles.image}></img>
            <img src="https://www.w3schools.com/w3images/underwater.jpg" className={styles.image}></img>
            <img src="https://www.w3schools.com/w3images/underwater.jpg" className={styles.image}></img>
            <img src="https://www.w3schools.com/w3images/rocks.jpg" className={styles.image}></img>
            <img src="https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg" className={styles.image}></img>
            <img src="https://www.w3schools.com/w3images/rocks.jpg" className={styles.image}></img>
            <img src="https://www.w3schools.com/w3images/underwater.jpg" className={styles.image}></img>
            <img src="https://www.w3schools.com/w3images/underwater.jpg" className={styles.image}></img>
            <img src="https://www.w3schools.com/w3images/rocks.jpg" className={styles.image}></img>
            <img src="https://www.w3schools.com/w3images/mountainskies.jpg" className={styles.image}></img>
            <img src="https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg" className={styles.image}></img>
            <img src="https://www.w3schools.com/w3images/rocks.jpg" className={styles.image}></img>
            <img src="https://www.w3schools.com/w3images/underwater.jpg" className={styles.image}></img>
            <img src="https://www.w3schools.com/w3images/underwater.jpg" className={styles.image}></img>
            <img src="https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg" className={styles.image}></img>
        </div>
    )
}

export default ContestPhotosGrid;