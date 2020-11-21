import React, { useEffect, useState } from 'react';
import contestEndpoints from '../../requests/contest-requests';
import axiosInstance from '../../requests/axios';
import { useDispatch, useSelector } from 'react-redux';
import { setTopRatedPhotosData } from '../../redux/actions/index'
import ImageBox from '../../components/LandingPageComponents/ImageBox';
import TopRatedImagesGrid from '../../components/LandingPageComponents/TopRatedImagesGrid';
import LandingPageTextBox from '../../components/LandingPageComponents/LandingPageTextBox';


const LandingPage = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const allPhotosData = useSelector(state => state.allTopRatedPhotosState);

    useEffect(() => {
        axiosInstance.get(contestEndpoints.topRatedPhotos)
            .then((response) => dispatch(setTopRatedPhotosData(response.data)))
            .catch((error) => { setError(error) })
    }, [dispatch]);

    const photosData = allPhotosData.slice(0, 4);

    return (
        <>
            {!error ? (
                <>
                    <ImageBox />
                    <TopRatedImagesGrid photosData={photosData} />
                    <LandingPageTextBox />
                </>
            ) : (
                    <>
                        <ImageBox />
                        <LandingPageTextBox />
                    </>
                )}
        </>
    )
}

export default LandingPage;