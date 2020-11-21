import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useSelector } from "react-redux";
import ViewPhotoFullsize from "../Photos/ViewPhotoFullsize";

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
    const styles = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOpen = (entry, index) => {
        setCurrentPhoto(entry);
        setCurrentIndex(index);
        setIsOpen(prevState => !prevState);
    }

    const handleClose = () => {
        setIsOpen(prevState => !prevState);
    }

    return (
        <div className={styles.container}>
            <div style={{ paddingBottom: "100px" }}>
                {contestInfo.entries && contestInfo.entries.map((entry, index) => {
                    return (
                        <div key={entry.id} className={styles.imageDiv}>
                            <img
                                className={styles.image}
                                alt={entry.title}
                                src={`http://localhost:4000/public/entries/thumbnails/${entry.thumbnailSize}`}
                                onClick={() => handleOpen(entry, index)}
                            />
                        </div>
                    )
                }
                )}
                <ViewPhotoFullsize setCurrentIndex={setCurrentIndex} setCurrentPhoto={setCurrentPhoto} isOpen={isOpen} handleClose={handleClose} currentPhoto={currentPhoto} currentIndex={currentIndex}/>
            </div>
        </div>
    )
}

export default ContestPhotosGrid;