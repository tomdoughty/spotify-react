import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import spotifyReducer, { initialState } from '../spotify/spotifySlice';
import App from '../../App';
import Header from './Header';

function renderWithProviders(ui, { reduxState } = {}) {
  const store = createStore(spotifyReducer, reduxState || initialState);
  return render(<Provider store={store}>{ui}</Provider>);
}

test('renders without crashing', () => {
  const { getByText } = renderWithProviders(
    <App>
      <Header />
    </App>
  );

  expect(getByText('Tomify')).toBeInTheDocument();
});

test('renders logged out state as default', () => {
  const { getByText } = renderWithProviders(
    <App>
      <Header />
    </App>
  );

  expect(getByText('Login')).toBeInTheDocument();
});

test('renders logged in state when logged in', () => {
  const { getByText } = renderWithProviders(
      <App>
        <Header />
      </App>,
      { 
        reduxState: {
          user: {
            country: 'GB',
            display_name: 'Tom Doughty',
            email: 'thomashdoughty@gmail.com', 
            id: 'doughtytheking',
            images: [],
          },
          tokens: {
            accessToken: '12345',
            refreshToken: '67890',
          }
        }
      }
  );

  expect(getByText('Profile')).toBeInTheDocument();
});
