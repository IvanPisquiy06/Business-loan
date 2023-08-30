import './revenue.css';

function Revenue() {
  return (
    <div className="revenue-container">
      <h2>What's your average monthly revenue?</h2>
      <div className="input-container">
        <span className="currency">$</span>
        <input
          type="number"
          placeholder="Monthly revenue"
          className="revenue-input"
        />
      </div>
    </div>
  );
}

export default Revenue;