import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PhotoList from '../components/PhotoList';
import {deletePhoto, getProfilePhotos} from '../redux/slices/profileSlice';

const EditProfile: () => React.Node = () => {
  const profile = useSelector((store) => store.profile);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfilePhotos());
  }, []);

  const handleDeletePhoto = (photoId: Number) => {
    dispatch(deletePhoto(photoId));
  };

  return (
    <PhotoList
      loading={profile.loading}
      photoList={profile?.photos}
      onDeletePhoto={handleDeletePhoto}
    />
  );
};

export default EditProfile;
