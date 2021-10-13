import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylists } from '../login/loginSlice';

export default function Profile() {
  const {
    display_name,
    images,
  } = useSelector((state) => state.user.user);

  const { playlists, status } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <div>
      { display_name &&
        <>
          <h1>{ display_name }</h1>
          <img src={ images[0].url } alt={display_name} />
          <button onClick={() => dispatch(getPlaylists())}>
            { status === 'idle' ? 'Get playlists' : 'Loading' }
          </button>
        </>
      }
      { playlists &&
        <ul>
          { playlists.map((playlist) => (
            <li>{ playlist.name }</li>
          )) }
        </ul>
      }
    </div>
  );
}
