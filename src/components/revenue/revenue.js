import './revenue.css';

const Revenue = (props) => {

  const handleInput = (e) => {
    const selectedValue = e.target.value;
    props.setValue(selectedValue)
    props.isFull(true)
  }

  return (
    <div className="revenue-container">
      <h2>What's your average monthly revenue?</h2>
      <div className="input-container">
        <span className="currency">$</span>
        <input
          type="number"
          placeholder="Monthly revenue"
          className="revenue-input"
          value={props.value}
          onChange={handleInput}
        />
      </div>
    </div>
  );
}

export default Revenue;