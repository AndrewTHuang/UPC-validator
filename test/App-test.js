import React from 'react';
import { chai, expect } from 'chai';
import { shallow, mount } from 'enzyme';

import App from '../src/App'
import InputForm from '../src/components/InputForm';
import InvalidBox from '../src/components/InvalidBox';
import ValidBox from '../src/components/ValidBox';

describe('<App />', () => {
  it('renders as a <div> with class .app-container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.app-container')).to.exist;
  });

  it('contains an <InputForm /> component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(InputForm)).to.exist;
  });

  it('contains an <InvalidBox /> component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(InvalidBox)).to.exist;
  });

  it('contains a <ValidBox /> component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(ValidBox)).to.exist;
  });

  it('has an initial validCodes state', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('validCodes')).to.eql([]);
  });

  it('has an initial invalidCodes state', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('invalidCodes')).to.eql([]);
  });

  it('has an initial readyToSubmit state', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('readyToSubmit')).to.eql(false);
  });

  it('has an initial notificationIsActive state', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('notificationIsActive')).to.eql(false);
  });

  it('has an initial notificationMessage state', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('notificationMessage')).to.eql('');
  });

  it('has an initial barStyle state', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('barStyle')).to.eql({backgroundColor: 'black', borderRadius: '15px'});
  });
})
