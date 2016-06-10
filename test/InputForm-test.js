import React from 'react';
import { chai, expect } from 'chai';
import { shallow, mount } from 'enzyme';

import InputForm from '../src/components/InputForm';

describe('<InputForm />', () => {
  it('renders as a <div> with class .input-form-container', () => {
    const wrapper = shallow(<InputForm />);
    expect(wrapper.find('div.input-form-container')).to.exist;
  });

  it('is passed a `checkCodes` prop', () => {
    const wrapper = mount(<InputForm />);
    expect(wrapper.props('checkCodes')).to.exist;
  });
})
