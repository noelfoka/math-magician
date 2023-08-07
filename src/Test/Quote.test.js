import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../pages/Quote';

it('renders correctly', () => {
  const quote = renderer
    .create(<Quote />)
    .toJSON();
  expect(quote).toMatchSnapshot();
});
