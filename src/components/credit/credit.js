import './credit.css'

const Credit = (props) => {

    const handleOptionChange = (event) => {
        props.setValue(event.target.value);
        props.isFull(true)
    };
    return <div className='container'>
        <h2>What's your credit score?</h2>
        <div className='options'>
            <label className='option'>
            <input
                type="radio"
                value="Excellent"
                checked={props.value === 'Excellent'}
                onChange={handleOptionChange}
            />
            Excellent (720+)
            </label >
            <label className='option'>
            <input
                type="radio"
                value="Good"
                checked={props.value === 'Good'}
                onChange={handleOptionChange}
            />
            Good (680 - 719)
            </label>
            <label className='option'>
            <input
                type="radio"
                value="Fair"
                checked={props.value === 'Fair'}
                onChange={handleOptionChange}
            />
            Fair (640 - 679)
            </label>
            <label className='option'>
            <input
                type="radio"
                value="Poor"
                checked={props.value === 'Poor'}
                onChange={handleOptionChange}
            />
            Poor (639 or less)
            </label>
        </div>
    </div>
}

export default Credit