import React from 'react';
import styles from '../styles/styles.scss';

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitCodes = this.submitCodes.bind(this);
  }

  submitCodes() {
    // Convert to string to preserve any leading zeros
    this.props.submitCodes(this.refs.upc.value.toString());
  }

  render() {
    return (
      <div className='input-form-container'>
        <h1> Input UPC codes here </h1>
          <textarea ref='upc' className='input-form' />
          <button onClick={this.submitCodes}> Submit Codes </button>
      </div>
    )
  }
}
