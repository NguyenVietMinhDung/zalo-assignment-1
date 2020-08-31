import React from 'react';
import { shallow } from 'enzyme';
import Confirm from './Confirm';

describe('<Confirm />', () => {
  test('renders correctly', () => {
    const component = shallow(<Confirm />);
    expect(component).toMatchSnapshot();
  });
});
