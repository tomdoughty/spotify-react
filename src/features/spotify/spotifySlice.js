import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Spotify from "spotify-web-api-js";
const spotifyApi = new Spotify();

export const initialState = {
  user: {
    country: null,
    display_name: null,
    email: null, 
    id: null,
    images: [],
  },
  playlists: [],
  tokens: {
    accessToken: null,
    refreshToken: null,
  },
  status: 'idle',
};

export const setUser = createAsyncThunk(
  'spotify/setUser',
  (accessToken) => {
    spotifyApi.setAccessToken(accessToken);
    return spotifyApi.getMe()
  }
);

export const setPlaylists = createAsyncThunk(
  'spotify/setPlaylists',
  async (accessToken) => {
    spotifyApi.setAccessToken(accessToken);
    const { items } = await spotifyApi.getUserPlaylists();
    return items;
  }
);

export const spotifySlice = createSlice({
  name: 'spotify',
  initialState,
  reducers: {
    setTokens: (state, action) => {
      state.tokens.accessToken = action.payload.accessToken;
      state.tokens.refreshToken = action.payload.refreshToken;
    },
    logOut: (state) => state = initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(setUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(setUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      })
      .addCase(setPlaylists.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(setPlaylists.fulfilled, (state, action) => {
        state.status = 'idle';
        state.playlists = action.payload;
      });
  },
});

export const { setTokens, logOut } = spotifySlice.actions;

export const selectAccessTokens = (state) => state.tokens.accessToken;

export const login = (payload) => (dispatch) => {
  dispatch(setTokens(payload));
};

export const getUser = () => (dispatch, getState) => {
  const accessToken = selectAccessTokens(getState())
  dispatch(setUser(accessToken));
};

export const getPlaylists = () => (dispatch, getState) => {
  const accessToken = selectAccessTokens(getState())
  dispatch(setPlaylists(accessToken));
};

export default spotifySlice.reducer;
