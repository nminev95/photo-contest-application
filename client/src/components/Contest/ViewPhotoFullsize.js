import React, { Component, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { useSelector } from 'react-redux';

const ViewPhotoFullsize = ({ isOpen, handleClose, currentPhoto }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const entries = useSelector(state => state.singleContestState.entries)
  
  console.log(entries)
  return (
    <div>
      {isOpen && (
        <Lightbox
          enableZoom={false}
          animationDuration={0}
          mainSrc={`http://localhost:4000/public/${currentPhoto}`}
          // nextSrc={images[(photoIndex + 1) % images.length]}
          // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={handleClose}
        // onMovePrevRequest={() =>
        //   this.setState({
        //     photoIndex: (photoIndex + images.length - 1) % images.length,
        //   })
        // }
        // onMoveNextRequest={() =>
        //   this.setState({
        //     photoIndex: (photoIndex + 1) % images.length,
        //   })
        // }
        />
      )}
    </div>
  );
};

export default ViewPhotoFullsize;
