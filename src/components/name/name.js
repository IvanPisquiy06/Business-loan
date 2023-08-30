import './name.css';

function Name(){
    return <div>
        <h2>What's your name?</h2>
        <div className='names'>
            <input type='text' className='name-input' placeHolder='First Name'></input>
            <input type='text' className='name-input' placeHolder='Last Name'></input>
        </div>
    </div>
}

export default Name