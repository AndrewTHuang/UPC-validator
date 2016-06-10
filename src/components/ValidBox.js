import React from 'react';
import styles from '../styles/styles.scss';

// These colors are used to alternate background shading for each UPC in the list.
const colors = ['rgba(0, 128, 0, 0.1)', 'rgba(160, 160, 160, 0.1)'];

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
        this.props.toggleNotification('UPC codes successfully submitted!', { backgroundColor: 'green' });
        this.props.clearValidCodes();
      } else {
        console.log('Uh oh, something went wrong! Got status code ' + res.status);
        this.props.toggleNotification('Uh oh, something went wrong! Please try again.', { backgroundColor: 'red' });
      }
    })
    .catch(err => {
      console.log('An error occurred: ', err);
    })
  }

  render() {
    const codes = this.props.codes.map((code, index) => {
      // Alternate background colors
      const style = {
        backgroundColor: colors[index % 2]
      }

      return (
        <div key={index} style={style} className='row'>
          {code}
        </div>
      )
    })

    return (
      <div className='container'>
        <p className='header'> Valid </p>
        <div className='box valid-box'>
          {codes}
        </div>
        {(this.props.readyToSubmit)  // Only render the Submit button if there are valid codes to submit
          ? <button onClick={this.submitValidCodes} className='button' id='green-button'> Submit Valid Codes </button>
          : null
        }
      </div>
    );
  }
}

ValidBox.propTypes = {
  codes: React.PropTypes.array.isRequired,
  readyToSubmit: React.PropTypes.bool.isRequired,
  toggleNotification: React.PropTypes.func.isRequired,
  clearValidCodes: React.PropTypes.func.isRequired,
}
