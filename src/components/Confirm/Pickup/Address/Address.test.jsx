import React from 'react';
import { shallow } from 'enzyme';
import Address from './Address';

describe('<Address />', () => {
  test('renders correctly', () => {
    const component = shallow(<Address />);
    expect(component).toMatchSnapshot();
  });
});
