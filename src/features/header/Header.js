import React from 'react';
import { logOut } from '../login/loginSlice';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Header() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleLogOut = () => {
    dispatch(logOut());
    history.push('/');
  }

  return (
    <div>
      { user.display_name ? 
        <p>Hey {user.display_name} - <button onClick={handleLogOut}>Log out</button></p>
      :
        <a href="/.netlify/functions/login">Login</a>
      }
    </div>
  );
}
