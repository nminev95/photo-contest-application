import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useSelector } from 'react-redux';
import axiosInstance from '../../requests/axios';
import contestEndpoints from '../../requests/contest-requests';
import RatePhotoPopper from './RatePhotoPopper';

const ViewPhotoFullsize = ({ handleClose, setCurrentPhoto, setCurrentIndex, currentPhoto, isOpen, currentIndex }) => {

  const contestInfo = useSelector(state => state.singleContestState);
  const userInfo = useSelector(state => state.loginState.user);
  const contestEntries = contestInfo.entries;
  const contestJury = contestInfo.jury;
  const [hasOrganizerVoted, setHasOrganizerVoted] = useState(false);

  const renderNextPhoto = (contestEntries, index) => {
    if (index === contestEntries.length - 1) {
      setCurrentPhoto(contestEntries[0]);
      setCurrentIndex(0);
    } else {
      setCurrentPhoto(contestEntries[index + 1]);
      setCurrentIndex(index + 1);
    }
  }

  const renderPreviousPhoto = (contestEntries, index) => {
    if (+index === 0) {
      setCurrentPhoto(contestEntries[contestEntries.length - 1]);
      setCurrentIndex(contestEntries.length - 1);
    } else {
      setCurrentPhoto(contestEntries[index - 1]);
      setCurrentIndex(index - 1);
    }
  }

  useEffect(() => {
    if (contestInfo && currentPhoto) {
      axiosInstance.get(`${contestEndpoints.singleContest}${contestInfo.id}${contestEndpoints.contestEntry}${currentPhoto.id}/voted`)
        .then(res => setHasOrganizerVoted(res.data))
    }
  }, [currentPhoto])

  const renderLightbox = () => {
    switch (true) {
      case (hasOrganizerVoted):
        return (
          <Lightbox
            animationDuration={0}
            mainSrc={`http://localhost:4000/public/${contestEntries[currentIndex].originalSize}`}
            toolbarButtons={[<Button
              type="button"
              variant="contained"
              color="secondary"
              disabled
              style={{ outline: 'none', zIndex: '4', background: 'lightgray' }}>
              Already rated
          </Button>]}
            nextSrc={`true`}
            prevSrc={'true'}
            imagePadding={30}
            onCloseRequest={handleClose}
            onMovePrevRequest={() => renderPreviousPhoto(contestEntries, currentIndex)}
            onMoveNextRequest={() => renderNextPhoto(contestEntries, currentIndex)}
            imageTitle={`${currentPhoto.title} by ${currentPhoto.username}`}
            imageCaption={`"${currentPhoto.story}" - @${currentPhoto.username} on ${(currentPhoto.date.split('T'))[0]}`}
          />
        )
      case (contestJury.some((jury) => jury.id === userInfo.sub) && +contestInfo.phase_id === 2):
        return (
          <Lightbox
            animationDuration={0}
            mainSrc={`http://localhost:4000/public/${contestEntries[currentIndex].originalSize}`}
            toolbarButtons={[<RatePhotoPopper
              photoId={currentPhoto.id} />]}
            nextSrc={`true`}
            prevSrc={'true'}
            imagePadding={30}
            onCloseRequest={handleClose}
            onMovePrevRequest={() => renderPreviousPhoto(contestEntries, currentIndex)}
            onMoveNextRequest={() => renderNextPhoto(contestEntries, currentIndex)}
            imageTitle={`${currentPhoto.title} by ${currentPhoto.username}`}
            imageCaption={`"${currentPhoto.story}" - @${currentPhoto.username} on ${(currentPhoto.date.split('T'))[0]}`}
          />
        )
      default:
        return (
          <Lightbox
            animationDuration={0}
            mainSrc={`http://localhost:4000/public/${contestEntries[currentIndex].originalSize}`}
            toolbarButtons={[]}
            nextSrc={`true`}
            prevSrc={'true'}
            imagePadding={30}
            onCloseRequest={handleClose}
            onMovePrevRequest={() => renderPreviousPhoto(contestEntries, currentIndex)}
            onMoveNextRequest={() => renderNextPhoto(contestEntries, currentIndex)}
            imageTitle={`${currentPhoto.title} by ${currentPhoto.username}`}
            imageCaption={`"${currentPhoto.story}" - @${currentPhoto.username} on ${(currentPhoto.date.split('T'))[0]}`}
          />
        )
    }
  }

  return (
    <div>
      <>
        {isOpen ? (
          renderLightbox()
        ) : (
            null
          )}
      </>
    </div>
  );
};

export default ViewPhotoFullsize;
