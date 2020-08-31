import React from 'react';
import { shallow } from 'enzyme';
import ShopSelector from './ShopSelector';

describe('<ShopSelector />', () => {
  test('renders correctly', () => {
    const component = shallow(<ShopSelector />);
    expect(component).toMatchSnapshot();
  });
});
