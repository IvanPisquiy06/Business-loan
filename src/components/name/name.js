import './name.css';

const Name = (props) => {

    const handleFirstInput = (event) => {
        props.setFirstName(event.target.value);
    };

    const handleLastInput = (event) => {
        props.setLastName(event.target.value);
        props.isFull(true)
    };

    return <div>
        <h2>What's your name?</h2>
        <div className='names'>
            <input type='text' className='name-input' placeHolder='First Name' value={props.firstName} onChange={handleFirstInput}></input>
            <input type='text' className='name-input' placeHolder='Last Name' value={props.lastName} onChange={handleLastInput}></input>
        </div>
    </div>
}

export default Name