import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import App from '../../App';
import Sidebar from './Sidebar';

test('renders without crashing', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App>
        <Sidebar />
      </App>
    </Provider>
  );

  // expect(getByText('Profile')).toBeInTheDocument();
});
