import React from 'react';
import { shallow } from 'enzyme';
import Introduction from './Introduction';

describe('<Introduction />', () => {
  test('renders correctly', () => {
    const component = shallow(<Introduction />);
    expect(component).toMatchSnapshot();
  });
});
