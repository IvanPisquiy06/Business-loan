import React from 'react';
import './zipCode.css';

const ZipCode = (props) => {
  const handleInputChange = (event) => {
    const inputValue = event.target.value.slice(0, 5);
    event.target.value = inputValue;
    props.setValue(event.target.value)
    props.isFull(true)
  };

  return (
    <div>
      <h2>Business ZIP Code</h2>
      <input
        type='number' // Use text type to allow for masking
        value={props.value}
        onInput={handleInputChange}
        maxLength="5"
        className='zip'
        placeHolder='ZIP Code'
      />
    </div>
  );
}

export default ZipCode;