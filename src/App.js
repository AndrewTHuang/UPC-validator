import React from 'react';
import ValidBox from './components/ValidBox';
import InvalidBox from './components/InvalidBox';

export default class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <InvalidBox />
        <ValidBox />
      </div>
    );
  }
}
