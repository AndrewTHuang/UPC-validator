import React from 'react';
import { chai, expect } from 'chai';
import { shallow, mount } from 'enzyme';

import ValidBox from '../src/components/ValidBox';

describe('<ValidBox />', () => {
  it('renders as a <div> with class .valid-box-container', () => {
    const wrapper = shallow(<ValidBox />);
    expect(wrapper.find('div.valid-box-container')).to.exist;
  });

  it('is passed a `codes` prop', () => {
    const wrapper = mount(<ValidBox />);
    expect(wrapper.props('codes')).to.exist;
  });

  it('is passed a `readyToSubmit` prop', () => {
    const wrapper = mount(<ValidBox />);
    expect(wrapper.props('readyToSubmit')).to.exist;
  });

  it('is passed a `toggleNotification` prop', () => {
    const wrapper = mount(<ValidBox />);
    expect(wrapper.props('toggleNotification')).to.exist;
  });

  it('is passed a `clearValidCodes` prop', () => {
    const wrapper = mount(<ValidBox />);
    expect(wrapper.props('clearValidCodes')).to.exist;
  });
})
