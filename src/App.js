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

  parseCodes(upc) {
    if (upc.includes('\n')) {
      const codes = upc.replace(/\r\n/g, '\n').split('\n');
      return codes;
    } else {
      return [upc];
    }
  }

  submitCodes(upc) {
    const currentCodes = this.state.codes;
    const newCodes = this.parseCodes(upc);
    const allCodes = currentCodes.concat(newCodes);

    this.setState({
      codes: allCodes
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
