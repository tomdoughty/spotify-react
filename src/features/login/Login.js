import { useEffect } from 'react';
import { withRouter, useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './loginSlice';

function Login() {
  const dispatch = useDispatch();
  const { accessToken, refreshToken } = useParams();
  const history = useHistory();
  
  useEffect(() => {
    dispatch(login({
      accessToken,
      refreshToken,
    }));
    history.push('/profile');
  },[dispatch, history, accessToken, refreshToken]);

  return null;
}

export default withRouter(Login);
