import { Button } from '@material-ui/core';
import React, { Component, useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RateBookPopper from './RateBookPopper';

const ViewPhotoFullsize = (props) => {

  const { id } = props.match.params;
  const history = useHistory();
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const entries = useSelector(state => state.singleContestState.entries);
  const contestInfo = useSelector(state => state.singleContestState);

  useEffect(() => {
    entries && setCurrentPhoto(entries.find((entry) => +(entry.id) === +(id)));
  }, [id])

  const renderNextPhoto = (id) => {
    if ((+id + 1) > entries.length) {
      history.push(`/contests/${contestInfo.id}/entries/1`)
    } else {
      history.push(`/contests/${contestInfo.id}/entries/${+id + 1}`)
    }
  }

  const renderPreviousPhoto = (id) => {
    if ((+id - 1) <= 0) {
      history.push(`/contests/${contestInfo.id}/entries/${entries.length}`)
    } else {
      history.push(`/contests/${contestInfo.id}/entries/${+id - 1}`)
    }
  }

  return (
    <div>
      {currentPhoto ? (
        <>
        <Lightbox
          animationDuration={0}
          mainSrc={`http://localhost:4000/public/${currentPhoto.originalSize}`}
          toolbarButtons={[<RateBookPopper/>]}
          nextSrc={'true'}
          prevSrc={'true'}
          imagePadding={30}
          onCloseRequest={() => history.push(`/contests/${contestInfo.id}`)}
          onMovePrevRequest={() => renderPreviousPhoto(id)}
          onMoveNextRequest={() => renderNextPhoto(id)}
          imageTitle={`${currentPhoto.title} by ${currentPhoto.username}`}
          imageCaption={`"${currentPhoto.story}" - @${currentPhoto.username} on ${(currentPhoto.date.split('T'))[0]}`}
        /><h1>hello</h1>
        </>
      ) : (null)}
    </div>
  );
};

export default ViewPhotoFullsize;
