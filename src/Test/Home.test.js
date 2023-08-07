import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/Home';

it('renders correctly', () => {
  const home = renderer
    .create(<Home />)
    .toJSON();
  expect(home).toMatchSnapshot();
});
