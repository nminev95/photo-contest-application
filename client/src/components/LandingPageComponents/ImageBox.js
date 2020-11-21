import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    image: {
        [theme.breakpoints.up('md')]: {
            height: '550px',
            width: '100%',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
            opacity: '0.9',
            transition: '0.5s all ease-in-out',
        },
        [theme.breakpoints.down('sm')]: {
            height: '500px',
            width: '100%',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
            opacity: '0.9',
            transition: '0.5s all ease-in-out',
        }
    },
}));

const images = [
    { src: 'http://localhost:4000/public/carousel/photo_camera.jpg' },
    { src: 'http://localhost:4000/public/carousel/flower.jpg' },
    { src: 'http://localhost:4000/public/carousel/camera.jpg' },

]


const ImageBox = () => {

    const styles = useStyles();

    return (
        <Carousel interval={3000} timeout={500} changeOnFirstRender={true} navButtonsAlwaysInvisible={true}>
            {
                images.map((image, i) => <CardMedia image={image.src} className={styles.image} />  )
            }
        </Carousel>
    )
}

export default ImageBox;