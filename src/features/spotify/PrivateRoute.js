import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  
  const {
    tokens: {
      accessToken
    }
  } = useSelector((state) => state);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        accessToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute
