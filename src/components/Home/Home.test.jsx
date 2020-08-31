import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('<Home />', () => {
  test('renders correctly', () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });
});
