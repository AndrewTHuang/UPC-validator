import React from 'react';
import InputForm from './components/InputForm';
import InvalidBox from './components/InvalidBox';
import ValidBox from './components/ValidBox';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codes: [],
      readyToSubmit: false
    }
  }

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
