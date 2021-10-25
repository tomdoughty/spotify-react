import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './features/header/Header';
import Home from './features/home/Home';
import Profile from './features/profile/Profile';
import Login from './features/spotify/Login';
import Logout from './features/spotify/Logout';
import Playlists from './features/playlists/Playlists';
import PrivateRoute from './features/spotify/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="content-wrapper">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login/:accessToken/:resetToken">
            <Login />
          </Route>
          <PrivateRoute>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/playlists">
              <Playlists />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
          </PrivateRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
