import React from 'react';
import styles from '../styles/styles.scss';

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.checkCodes = this.checkCodes.bind(this);
  }

  checkCodes() {
    // Convert to string to preserve any leading zeros
    this.props.checkCodes(this.refs.upc.value.toString());
    this.refs.upc.value = null;
  }

  render() {
    return (
      <div className='input-form-container'>
        <p className='header'> Input UPC codes </p>
          <textarea ref='upc' className='input-form' autoFocus />
          <button onClick={this.checkCodes} className='button' id='check-button'> Check Codes </button>
      </div>
    )
  }
}
