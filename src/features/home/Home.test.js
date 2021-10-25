import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders without crashing', () => {
  const { getByText } = render(<Home />);

  expect(getByText('Tom\'s Spotify App')).toBeInTheDocument();
});
