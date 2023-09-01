import './money-needed.css';

const QuantitySlider = (props) => {
  const minValue = 10000;
  const maxValue = 1000000;
  const stepValue = 5000;

  const handleChange = (event) => {
    const newValue = Math.min(
      Math.max(minValue, event.target.value),
      maxValue
    );
    props.setValue(newValue);
    props.isFull(true)
  };

  return (
    <div className="quantity-slider">
        <h2>How much money do you need?</h2>
        <div className="value">${props.value.toLocaleString()}</div>
        <input
        type="range"
        min={minValue}
        max={maxValue}
        step={stepValue}
        value={props.value}
        onChange={handleChange}
        className="slider"
        />
    </div>
  );
};

export default QuantitySlider;