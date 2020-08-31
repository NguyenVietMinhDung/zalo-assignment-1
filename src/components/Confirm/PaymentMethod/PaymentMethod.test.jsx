import React from 'react';
import { shallow } from 'enzyme';
import PaymentMethod from './PaymentMethod';

describe('<PaymentMethod />', () => {
  test('renders correctly', () => {
    const component = shallow(<PaymentMethod />);
    expect(component).toMatchSnapshot();
  });
});
