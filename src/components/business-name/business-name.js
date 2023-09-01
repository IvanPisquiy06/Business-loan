import './business-name.css'

const BusinessName = (props) => {

    const handleInput = (event) => {
        props.setValue(event.target.value);
        props.isFull(true)
    };

    return<div>
        <h2>What's you business name?</h2>
        <input type='text' className='businessName' placeholder='Business Name' value={props.value} onChange={handleInput}></input>
    </div>
}

export default BusinessName