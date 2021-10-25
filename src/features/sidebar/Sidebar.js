import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <ul className="sidebar">
      <li><NavLink to="/profile" activeClassName="selected">Profile</NavLink></li>
      <li><NavLink to="/playlists" activeClassName="selected">Playlists</NavLink></li>
    </ul>
  );
}
