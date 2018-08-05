import React from 'react';
import {shallow} from 'enzyme';

import PillButtons from '../pillButtons'

describe('<PillButtons/>', () => {
  it('has 6 tabs', () => {
    const wrapper = shallow(<PillButtons />);
    expect(wrapper).toMatchSnapshot();
  })
})
