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
  position: 1,
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
    dispatch(addPhoto(hardcodedPhoto));
  };

  return (
    <PhotoList
      loading={profile.loading}
      photoList={profile?.photos}
      onDeletePhoto={handleDeletePhoto}
      onUpdatePhoto={handleUpdatePhoto}
      onAddPhoto={handleAddPhoto}
    />
  );
};

export default EditProfile;
