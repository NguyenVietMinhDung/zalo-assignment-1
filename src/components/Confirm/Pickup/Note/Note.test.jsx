import React from 'react';
import { shallow } from 'enzyme';
import Note from './Note';

describe('<Note />', () => {
  test('renders correctly', () => {
    const component = shallow(<Note />);
    expect(component).toMatchSnapshot();
  });
});
