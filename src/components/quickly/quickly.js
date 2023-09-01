import './quickly.css'

const Quickly = (props) => {

    const handleOptionChange = (event) => {
        props.setValue(event.target.value);
        props.isFull(true)
    };
    return <div className='container'>
        <h2>How quickly do you need the money?</h2>
        <div className='options'>
            <label className='option'>
            <input
                type="radio"
                value="Within a week"
                checked={props.value === 'Within a week'}
                onChange={handleOptionChange}
            />
            Within a week
            </label >
            <label className='option'>
            <input
                type="radio"
                value="Within 2 Weeks"
                checked={props.value === 'Within 2 Weeks'}
                onChange={handleOptionChange}
            />
            Within 2 Weeks
            </label>
            <label className='option'>
            <input
                type="radio"
                value="Within a Month"
                checked={props.value === 'Within a Month'}
                onChange={handleOptionChange}
            />
            Within a Month
            </label>
            <label className='option'>
            <input
                type="radio"
                value="Unsure"
                checked={props.value === 'Unsure'}
                onChange={handleOptionChange}
            />
            Unsure
            </label>
        </div>
    </div>
}

export default Quickly