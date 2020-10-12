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
    updatePhotoRequest: (state) => {},
    updatePhotoSuccess: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.photos = state.photos.filter(
        (photo) => photo.id !== action.payload.id,
      );
      state.photos.push(action.payload);
    },
    updatePhotoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addPhotoRequest: (state) => {},
    addPhotoSuccess: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.photos.push(action.payload);
    },
    addPhotoFailure: (state, action) => {
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
  updatePhotoRequest,
  updatePhotoSuccess,
  updatePhotoFailure,
  addPhotoRequest,
  addPhotoSuccess,
  addPhotoFailure,
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

export function updatePhoto(photoId, query) {
  return (dispatch) => {
    dispatch(updatePhotoRequest());
    photosService.updatePhoto(photoId, query).then(
      (photo) => {
        dispatch(updatePhotoSuccess(photo));
      },
      (error) => {
        dispatch(updatePhotoFailure(error.toString()));
      },
    );
  };
}

export function addPhoto(query) {
  return (dispatch) => {
    dispatch(addPhotoRequest());
    photosService.addMemberPhoto(1, query).then(
      (photo) => {
        dispatch(addPhotoSuccess(photo));
      },
      (error) => {
        dispatch(addPhotoFailure(error.toString()));
      },
    );
  };
}

export default profileSlice.reducer;
