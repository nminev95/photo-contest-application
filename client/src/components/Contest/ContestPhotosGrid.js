import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useSelector } from "react-redux";
import ViewPhotoFullsize from "./ViewPhotoFullsize";

const useStyles = makeStyles((theme) => ({
    container: {
        lineHeight: 0,
        width: '75%',
        margin: 'auto',
        WebkitColumnCount: 4,
        WebkitColumnGap: '25px',
        MozColumnCount: 4,
        MozColumnGap: '10px',
        columnCount: 4,
        columnGap: '10px',
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
            transform: 'scale(1.1)',
            cursor: 'pointer'
        }
    },
}))

const ContestPhotosGrid = () => {

    const contestInfo = useSelector(state => state.singleContestState);
    const [isFullsizeOpen, setIsFullsizeOpen] = useState(false);
    const [clickedPhotoFullsizeUrl, setClickedPhotoFullsizeUrl] = useState(null);
    const styles = useStyles();

    const handleOpen = (url) => {
        setClickedPhotoFullsizeUrl(url)
        setIsFullsizeOpen(prevState => !prevState);
    }

    const handleClose = () => {
        setIsFullsizeOpen(prevState => !prevState);
    }

    return (
        <div className={styles.container}>
            {contestInfo.entries && contestInfo.entries.map(entry => {
                return (
                    <div key={entry.title} className={styles.imageDiv}>
                        <img
                            className={styles.image}
                            alt={entry.title}
                            src={`http://localhost:4000/public/entries/thumbnails/${entry.thumbnailSize}`}
                            onClick={() => handleOpen(entry.originalSize)}
                        />
                    </div>
                )
            }
            )}
            <ViewPhotoFullsize isOpen={isFullsizeOpen} handleClose={handleClose} currentPhoto={clickedPhotoFullsizeUrl} />
        </div>
    )
}

export default ContestPhotosGrid;