import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Spotify from "spotify-web-api-js";
const spotifyApi = new Spotify();

export const initialState = {
  user: {
    display_name: null,
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
  'user/setUser',
  (accessToken) => {
    spotifyApi.setAccessToken(accessToken);
    return spotifyApi.getMe()
  }
);

export const setPlaylists = createAsyncThunk(
  'user/setPlaylists',
  async (accessToken) => {
    spotifyApi.setAccessToken(accessToken);
    const { items } = await spotifyApi.getUserPlaylists();
    return items;
  }
);

export const loginSlice = createSlice({
  name: 'user',
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

export const { setTokens, logOut } = loginSlice.actions;

export const selectAccessTokens = (state) => state.tokens.accessToken;

export const login = (payload) => (dispatch) => {
  dispatch(setTokens(payload));
  dispatch(setUser(payload.accessToken));
};

export const getPlaylists = () => (dispatch, getState) => {
  const accessToken = selectAccessTokens(getState())
  dispatch(setPlaylists(accessToken));
};

export default loginSlice.reducer;
