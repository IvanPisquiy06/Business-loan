import React from 'react';
import './zipCode.css';

function ZipCode() {
  const handleInputChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
    const limitedValue = inputValue.slice(0, 5); // Limit to 5 characters
    event.target.value = limitedValue;
  };

  return (
    <div>
      <h2>Business ZIP Code</h2>
      <input
        type='text' // Use text type to allow for masking
        onInput={handleInputChange}
        maxLength="5"
        className='zip'
        placeHolder='ZIP Code'
      />
    </div>
  );
}

export default ZipCode;