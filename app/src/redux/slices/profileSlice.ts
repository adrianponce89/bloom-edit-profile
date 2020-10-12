import {createSlice} from '@reduxjs/toolkit';
import photosService from '../services/photosService';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {loaded: false, loading: false, photos: [], error: ''},
  reducers: {
    getPhotosRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    getPhotosSuccess: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.photos = action.payload;
    },
    getPhotosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deletePhotoRequest: (state) => {},
    deletePhotoSuccess: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.photos = state.photos.filter(
        (photo) => photo.id !== action.payload,
      );
    },
    deletePhotoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getPhotosRequest,
  getPhotosSuccess,
  getPhotosFailure,
  deletePhotoRequest,
  deletePhotoSuccess,
  deletePhotoFailure,
} = profileSlice.actions;

export function getProfilePhotos() {
  return (dispatch) => {
    dispatch(getPhotosRequest());
    photosService.getMemberPhotos(1).then(
      (photos) => {
        dispatch(getPhotosSuccess(photos));
      },
      (error) => {
        dispatch(getPhotosFailure(error.toString()));
      },
    );
  };
}

export function deletePhoto(photoId) {
  return (dispatch) => {
    dispatch(deletePhotoRequest());
    photosService.deletePhoto(photoId).then(
      () => {
        dispatch(deletePhotoSuccess(photoId));
      },
      (error) => {
        dispatch(deletePhotoFailure(error.toString()));
      },
    );
  };
}

export default profileSlice.reducer;
