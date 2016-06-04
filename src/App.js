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
    this.calculateCheckDigit = this.calculateCheckDigit.bind(this);
    this.validateCode = this.validateCode.bind(this);
  }

  // Assumes length 11
  calculateCheckDigit(upc) {
    const code = upc.split('').map(Number);
    const oddDigitSum = code[0] + code[2] + code[4] + code[6] + code[8] + code[10];
    const evenDigitSum = code[1] + code[3] + code[5] + code[7] + code[9];
    const result = (oddDigitSum * 3) + evenDigitSum;
    const checkDigit = result % 10;

    if (checkDigit !== 0) {
      return 10 - checkDigit;
    } else {
      return checkDigit;
    }
  }

  parseCodes(upc) {
    if (upc.includes('\n')) {
      const codes = upc.replace(/\r\n/g, '\n').split('\n');
      return codes;
    } else {
      return [upc];
    }
  }

  validateCode(upc, allCodes) {
    // Check if UPC has 12 characters
    if (upc.length !== 12) {
      alert('UPC codes must be 12 characters long. Please try again.')
      return;
    }

    // Check if UPC's check digit is correct
    const checkDigit = this.calculateCheckDigit(upc.slice(0, -1));
    if (checkDigit != upc[upc.length - 1]) {
      alert('This appears to be an invalid UPC code. Please try again')
      return;
    }

    // If UPC is valid, pass it along
    allCodes.push(upc);
    return allCodes;
  }

  submitCodes(upc) {
    const currentCodes = this.state.codes;
    const newCodes = this.parseCodes(upc);
    let allCodes = [];

    // Validate before doing anything with the codes.
    newCodes.forEach(code => {
      this.validateCode(code, allCodes);
    });

    // If good, then add.
    allCodes = currentCodes.concat(allCodes);

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
