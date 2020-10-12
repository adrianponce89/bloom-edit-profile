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
  },
});

export const {
  getPhotosRequest,
  getPhotosSuccess,
  getPhotosFailure,
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

export default profileSlice.reducer;
