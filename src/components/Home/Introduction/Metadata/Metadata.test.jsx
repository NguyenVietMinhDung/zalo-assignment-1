import React from 'react';
import { shallow } from 'enzyme';
import Metadata from './Metadata';

describe('<Metadata />', () => {
  test('renders correctly', () => {
    const component = shallow(<Metadata />);
    expect(component).toMatchSnapshot();
  });
});
