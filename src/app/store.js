import { configureStore } from '@reduxjs/toolkit';
import spotifyReducer from '../features/spotify/spotifySlice';

export const store = configureStore({
  reducer: spotifyReducer
});
