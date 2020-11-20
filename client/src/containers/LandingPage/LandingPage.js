import React, { useEffect, useState } from 'react';
import contestEndpoints from '../../requests/contest-requests';
import axios from '../../requests/axios';
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
        axios.get(contestEndpoints.topRatedPhotos)
        .catch((error) => { setError(error)})
        .then((response) => dispatch (setTopRatedPhotosData(response.data)))
    }, [dispatch]);
  
    const photosData = allPhotosData.slice(0,3);

    return (      
        <>
            <ImageBox />
            <TopRatedImagesGrid photosData={photosData}/>
            <LandingPageTextBox />
        </>
    )
}

export default LandingPage;