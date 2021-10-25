import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../sidebar/Sidebar';
import { getUser } from '../spotify/spotifySlice';

export default function Profile() {
  const { 
    user: {
      country,
      display_name,
      email, 
      id,
    }
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      { display_name &&
        <>
          <h1 className="hero">Account overview</h1>
          <Sidebar />
          <div className="content">
            <h2>Profile</h2>
            <dl>
                <dt>Display name</dt>
                <dd>{ display_name }</dd>
            </dl>
            <dl>
                <dt>Username</dt>
                <dd>{ id }</dd>
            </dl>
            <dl>
                <dt>Email</dt>
                <dd>{ email }</dd>
            </dl>
            <dl>
                <dt>Country</dt>
                <dd>{ country }</dd>
            </dl>
          </div>
        </>
      }
    </div>
  );
}
