import loginReducer, {
  setTokens,
  initialState
} from './loginSlice';

describe('login reducer', () => {
  it('should handle initial state', () => {
    expect(loginReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setting tokens', () => {
    const actual = loginReducer(initialState, setTokens({
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
    }));
    expect(actual.tokens.accessToken).toEqual('accessToken');
    expect(actual.tokens.refreshToken).toEqual('refreshToken');
  });
});
