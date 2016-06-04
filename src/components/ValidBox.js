import React from 'react';
import styles from '../styles/styles.scss';

export default class ValidBox extends React.Component {
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
      </div>
    );
  }
}
