import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('<Timer />', () => {
  test('renders correctly', () => {
    const component = shallow(<Timer />);
    expect(component).toMatchSnapshot();
  });
});
