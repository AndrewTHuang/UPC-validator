import React from 'react';
import InputForm from './components/InputForm';
import InvalidBox from './components/InvalidBox';
import ValidBox from './components/ValidBox';

export default class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <InputForm />
        <InvalidBox />
        <ValidBox />
      </div>
    );
  }
}
