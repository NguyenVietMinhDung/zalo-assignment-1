import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

describe('<SearchBox />', () => {
  test('renders correctly', () => {
    const component = shallow(<SearchBox />);
    expect(component).toMatchSnapshot();
  });
});
