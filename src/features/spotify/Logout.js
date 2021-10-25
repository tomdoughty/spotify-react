import { useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from './spotifySlice';

function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    dispatch(logOut());
    history.push('/');
  }, [dispatch, history]);

  return null;
}

export default withRouter(Logout);
