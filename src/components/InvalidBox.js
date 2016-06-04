import React from 'react';
import styles from '../styles/styles.scss';

export default class InvalidBox extends React.Component {
  render() {
    const codes = this.props.codes.map((code, index) => {
      return (
        <p key={index}>{code}</p>
      )
    })

    return (
      <div className='invalid-box-container'>
        <h1> Invalid </h1>
        <div className='invalid-box'>
          {codes}
        </div>
      </div>
    );
  }
}
