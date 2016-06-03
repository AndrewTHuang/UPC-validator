import React from 'react';
import styles from '../styles/styles.scss';

export default class InvalidBox extends React.Component {
  render() {
    return (
      <div className='invalid-box-container'>
        <h1> Invalid </h1>
        <div className='invalid-box'></div>
      </div>
    );
  }
}
