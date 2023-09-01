import './email.css';

const Email = (props) => {

    const handleInput = (event) => {
        props.setValue(event.target.value);
        props.isFull(true)
    };

    return <div>
        <h2>What's you email?</h2>
        <input type='email' className='email' value={props.value} onChange={handleInput}></input>
    </div>
}

export default Email