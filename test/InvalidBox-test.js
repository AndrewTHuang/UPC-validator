import React from 'react';
import { chai, expect } from 'chai';
import { shallow, mount } from 'enzyme';

import InvalidBox from '../src/components/InvalidBox';

describe('<InvalidBox />', () => {
  it('renders as a <div> with class .invalid-box-container', () => {
    const wrapper = shallow(<InvalidBox />);
    expect(wrapper.find('div.invalid-box-container')).to.exist;
  });

  it('is passed a `codes` prop', () => {
    const wrapper = mount(<InvalidBox />);
    expect(wrapper.props('codes')).to.exist;
  });
})
