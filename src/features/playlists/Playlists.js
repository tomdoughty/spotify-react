import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../sidebar/Sidebar';
import { getPlaylists } from '../spotify/spotifySlice';

export default function Playlists() {
  const { playlists } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  return (
    <div>
      <h1 className="hero">Playlists</h1>
      <Sidebar />
      <div className="content">
        <h2>Shared playlists</h2>
        { playlists &&
          <ul>
            { playlists.map((playlist) => (
              <li>{ playlist.name }</li>
            )) }
          </ul>
        }
      </div>
    </div>
  );
}
