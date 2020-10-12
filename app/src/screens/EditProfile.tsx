import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PhotoList from '../components/PhotoList';
import {getProfilePhotos} from '../redux/slices/profileSlice';

const EditProfile: () => React.Node = () => {
  const profile = useSelector((store) => store.profile);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfilePhotos());
  }, []);

  return <PhotoList loading={profile.loading} photoList={profile?.photos} />;
};

export default EditProfile;
