import { Button } from '@material-ui/core';
import React, { Component, useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const ViewPhotoFullsize = (props) => {

  const { id } = props.match.params;
  const history = useHistory();
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const entries = useSelector(state => state.singleContestState.entries);

  useEffect(() => {
    entries && setCurrentPhoto(entries.find((entry) => +(entry.id) === +(id)));
  }, [id])

  return (
    <div>
      {currentPhoto ? (
        <Lightbox
          enableZoom={false}
          animationDuration={0}
          mainSrc={`http://localhost:4000/public/${currentPhoto.originalSize}`}
          toolbarButtons={[<Button variant="contained" color="primary" style={{ outline: 'none' }}>Rate photo</Button>]}
          // nextSrc={images[(photoIndex + 1) % images.length]}
          // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => history.goBack()}
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
      ) : (null)}
    </div>
  );
};

export default ViewPhotoFullsize;
