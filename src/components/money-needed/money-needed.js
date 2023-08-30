import React, { useState } from 'react';
import './money-needed.css';

const QuantitySlider = () => {
  const minValue = 10000;
  const maxValue = 1000000;
  const stepValue = 5000;

  const [quantity, setQuantity] = useState(minValue);

  const handleChange = (event) => {
    const newValue = Math.min(
      Math.max(minValue, event.target.value),
      maxValue
    );
    setQuantity(newValue);
  };

  return (
    <div className="quantity-slider">
        <h2>How much money do you need?</h2>
        <div className="value">${quantity.toLocaleString()}</div>
        <input
        type="range"
        min={minValue}
        max={maxValue}
        step={stepValue}
        value={quantity}
        onChange={handleChange}
        className="slider"
        />
    </div>
  );
};

export default QuantitySlider;