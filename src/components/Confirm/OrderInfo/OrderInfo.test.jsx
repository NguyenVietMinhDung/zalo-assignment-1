import React from 'react';
import { shallow } from 'enzyme';
import OrderInfo from './OrderInfo';

describe('<OrderInfo />', () => {
  test('renders correctly', () => {
    const component = shallow(<OrderInfo />);
    expect(component).toMatchSnapshot();
  });
});
