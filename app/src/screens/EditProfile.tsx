import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PhotoList from '../components/PhotoList';
import {
  deletePhoto,
  updatePhoto,
  addPhoto,
  getProfilePhotos,
} from '../redux/slices/profileSlice';

const hardcodedPhoto = {
  url: 'https://i.imgur.com/sQhjCoY.jpg',
  width: 2000,
  height: 1000,
  centerX: 1000,
  centerY: 500,
};

const EditProfile: () => React.Node = () => {
  const profile = useSelector((store) => store.profile);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfilePhotos());
  }, []);

  const handleDeletePhoto = (photoId: Number) => {
    dispatch(deletePhoto(photoId));
  };

  const handleUpdatePhoto = (photoId: Number) => {
    dispatch(updatePhoto(photoId, hardcodedPhoto));
  };

  const handleAddPhoto = () => {
    const maxPosition = profile.photos.reduce(
      (acc, photo) => Math.max(acc, photo.position),
      profile.photos.length > 0 ? profile.photos[0].position : 0,
    );

    dispatch(addPhoto({...hardcodedPhoto, position: maxPosition + 1}));
  };

  const handleMoveLeftPhoto = (photoSelected) => {
    const indexInitial = profile.photos.findIndex(
      (p) => p.id === photoSelected.id,
    );

    const nextIndex = Math.max(0, indexInitial - 1);

    const photoToSwap = profile.photos[nextIndex];
    const nextPosition = photoToSwap.position;
    const prevPosition = photoSelected.position;

    dispatch(updatePhoto(photoSelected.id, {position: nextPosition}));
    dispatch(updatePhoto(photoToSwap.id, {position: prevPosition}));
  };

  const handleMoveRightPhoto = (photoSelected) => {
    const indexInitial = profile.photos.findIndex(
      (p) => p.id === photoSelected.id,
    );

    const nextIndex = Math.min(profile.photos.length - 1, indexInitial + 1);

    const photoToSwap = profile.photos[nextIndex];
    const nextPosition = photoToSwap.position;
    const prevPosition = photoSelected.position;

    dispatch(updatePhoto(photoSelected.id, {position: nextPosition}));
    dispatch(updatePhoto(photoToSwap.id, {position: prevPosition}));
  };

  return (
    <PhotoList
      loading={profile.loading}
      photoList={profile?.photos}
      onDeletePhoto={handleDeletePhoto}
      onUpdatePhoto={handleUpdatePhoto}
      onAddPhoto={handleAddPhoto}
      onMoveLeftPhoto={handleMoveLeftPhoto}
      onMoveRightPhoto={handleMoveRightPhoto}
    />
  );
};

export default EditProfile;
