import React, { useState } from 'react';
import './phone.css';

function Phone() {
  const [formattedValue, setFormattedValue] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, ''); // Remove non-digit characters

    // Format the phone number (xxx) xxx-xxxx
    const formattedNumber = inputValue.replace(
      /^(\d{0,3})(\d{0,3})(\d{0,4})/,
      '($1) $2-$3'
    );

    setFormattedValue(formattedNumber);
  };

  return (
    <div>
      <h2>What's your Phone Number?</h2>
      <input
        type='text'
        className='phone'
        value={formattedValue}
        onChange={handleInputChange}
        maxLength="14" // Set the maximum length to accommodate the formatted input
      />
    </div>
  );
}

export default Phone;