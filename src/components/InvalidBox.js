import React from 'react';
import styles from '../styles/styles.scss';

const colors = ['rgba(128, 0, 0, 0.1)', 'rgba(160, 160, 160, 0.1)'];

export default class InvalidBox extends React.Component {
  render() {
    const codes = this.props.codes.map((obj, index) => {
      const style = {
        backgroundColor: colors[index % 2]
      }

      return (
        <div key={index} style={style} className='invalid-row'>
          <div>{obj.code}</div>
          <div className='invalid-message'>{obj.message}</div>
        </div>
      )
    })

    return (
      <div className='invalid-box-container'>
        <p className='header'> Invalid </p>
        <div className='invalid-box'>
          {codes}
        </div>
      </div>
    );
  }
}

InvalidBox.propTypes = {
  codes: React.PropTypes.array.isRequired
}
