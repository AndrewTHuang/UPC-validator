import React from 'react';
import styles from '../styles/styles.scss';

export default class ValidBox extends React.Component {
  constructor(props) {
    super(props);
    this.submitValidCodes = this.submitValidCodes.bind(this);
  }

  submitValidCodes() {
    const body = JSON.stringify({
      'list': this.props.codes
    });

    fetch('https://iwo3uesa6c.execute-api.us-east-1.amazonaws.com/prod/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then(res => {
      if (res.ok) {
        console.log('UPC codes successfully submitted!');
      } else {
        console.log('Uh oh, something went wrong. Got status code ' + res.status);
      }
    })
    .catch(err => {
      console.log('An error occurred: ', err);
    })
  }

  render() {
    const codes = this.props.codes.map((code, index) => {
      return (
        <p key={index}>{code}</p>
      )
    })

    return (
      <div className='valid-box-container'>
        <h1> Valid </h1>
        <div className='valid-box'>
          {codes}
        </div>
        {(this.props.readyToSubmit)
          ? <button onClick={this.submitValidCodes}> Submit Valid Codes </button>
          : null
        }
      </div>
    );
  }
}
