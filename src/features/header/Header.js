import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { user } = useSelector((state) => state);

  return (
    <div className="header-container">
      <header>
        <div className="header-left">
          <Link to="/">Tomify</Link>
        </div>
        <div className="header-right">
          { user.display_name ? 
            <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/logout">Log out</Link>
              </li>
            </ul>
          :
            <ul>
              <li>
                <a href="/.netlify/functions/login">Login</a>
              </li>
            </ul>
          }
        </div>
      </header>
    </div>
  );
}
