import React from 'react';
import { shallow } from 'enzyme';
import Pickup from './Pickup';

describe('<Pickup />', () => {
  test('renders correctly', () => {
    const component = shallow(<Pickup />);
    expect(component).toMatchSnapshot();
  });
});
