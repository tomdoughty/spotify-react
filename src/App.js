import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './features/header/Header';
import Home from './features/home/Home';
import Profile from './features/profile/Profile';
import Login from './features/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/login/:accessToken/:resetToken">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
