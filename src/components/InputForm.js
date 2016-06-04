import React from 'react';
import styles from '../styles/styles.scss';

export default class InputForm extends React.Component {
  render() {
    return (
      <div className='input-form-container'>
        <h1> Input UPC codes here </h1>
        <form className='input-form' action="">
          <textarea></textarea>
        </form>
      </div>
    );
  }
}
