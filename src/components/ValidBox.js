import React from 'react';
import styles from '../styles/styles.scss';

export default class ValidBox extends React.Component {
  render() {
    return (
      <div className='valid-box-container'>
        <h1> Valid </h1>
        <div className='valid-box'>
          {this.props.codes}
        </div>
      </div>
    );
  }
}
