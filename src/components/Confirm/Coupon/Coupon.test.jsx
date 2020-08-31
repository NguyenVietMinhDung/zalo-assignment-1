import React from 'react';
import { shallow } from 'enzyme';
import Coupon from './Coupon';

describe('<Coupon />', () => {
  test('renders correctly', () => {
    const component = shallow(<Coupon />);
    expect(component).toMatchSnapshot();
  });
});
