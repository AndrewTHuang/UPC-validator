import React from 'react';
import InputForm from './components/InputForm';
import InvalidBox from './components/InvalidBox';
import ValidBox from './components/ValidBox';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validCodes: [],
      invalidCodes: [],
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

  // Called once per code
  validateCode(upc, validCodes, invalidCodes) {
    // Check if UPC has 12 characters
    if (upc.length !== 12) {
      console.log('UPC codes must be 12 characters long. Please try again.')
      // submit invalid
      invalidCodes.push(upc);
      return invalidCodes;
    }

    // Check if UPC's check digit is correct
    const checkDigit = this.calculateCheckDigit(upc.slice(0, -1));
    if (checkDigit != upc[upc.length - 1]) {
      console.log('This appears to be an invalid UPC code. Please try again')
      invalidCodes.push(upc);
      return invalidCodes;
    }

    // If UPC is valid, pass it along
    validCodes.push(upc);
    return validCodes;
  }

  submitCodes(upc) {
    const newCodes = this.parseCodes(upc);
    const currentValidCodes = this.state.validCodes;
    const currentInvalidCodes = this.state.invalidCodes;
    let validCodes = [];
    let invalidCodes = [];

    // Validate before doing anything with the codes.
    newCodes.forEach(code => {
      this.validateCode(code, validCodes, invalidCodes);
    });

    if (validCodes.length > 0) {
      validCodes = currentValidCodes.concat(validCodes);
      this.setState({ validCodes })
    }

    if (invalidCodes.length > 0) {
      invalidCodes = currentInvalidCodes.concat(invalidCodes);
      this.setState({ invalidCodes })
    }
  }

  render() {
    return (
      <div className='app-container'>
        <InputForm
          submitCodes={this.submitCodes}
        />
        <InvalidBox
          codes={this.state.invalidCodes}
        />
        <ValidBox
          codes={this.state.validCodes}
        />
      </div>
    );
  }
}
