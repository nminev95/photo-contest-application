import React from 'react';
import ImageBox from '../../components/LandingPageComponents/ImageBox';
import TopRatedImagesGrid from '../../components/LandingPageComponents/TopRatedImagesGrid';
import LandingPageTextBox from '../../components/LandingPageComponents/LandingPageTextBox';


const LandingPage = () => {
    return (
        <>
            <ImageBox />
            <TopRatedImagesGrid />
            <LandingPageTextBox />
        </>
    )
}

export default LandingPage;