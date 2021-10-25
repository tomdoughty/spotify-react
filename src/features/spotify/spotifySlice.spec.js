import spotifyReducer, {
  setTokens,
  initialState
} from './spotifySlice';

describe('login reducer', () => {
  it('should handle initial state', () => {
    expect(spotifyReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setting tokens', () => {
    const actual = spotifyReducer(initialState, setTokens({
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
    }));
    expect(actual.tokens.accessToken).toEqual('accessToken');
    expect(actual.tokens.refreshToken).toEqual('refreshToken');
  });
});
