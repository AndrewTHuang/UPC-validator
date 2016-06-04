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

    this.submitCodes = this.submitCodes.bind(this);
  }

  submitCodes(upc) {
    const currentCodes = this.state.codes;
    currentCodes.push(upc);

    this.setState({
      codes: currentCodes
    })
  }

  render() {
    return (
      <div className='app-container'>
        <InputForm
          submitCodes={this.submitCodes}
        />
        <InvalidBox />
        <ValidBox
          codes={this.state.codes}
        />
      </div>
    );
  }
}
