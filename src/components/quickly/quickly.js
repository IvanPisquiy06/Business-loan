import './quickly.css'
import React, { useState } from 'react';

function Quickly(){
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    };
    return <div className='container'>
        <h2>How quickly do you need the money?</h2>
        <div className='options'>
            <label className='option'>
            <input
                type="radio"
                value="Within a week"
                checked={selectedOption === 'Within a week'}
                onChange={handleOptionChange}
            />
            Within a week
            </label >
            <label className='option'>
            <input
                type="radio"
                value="Within 2 Weeks"
                checked={selectedOption === 'Within 2 Weeks'}
                onChange={handleOptionChange}
            />
            Within 2 Weeks
            </label>
            <label className='option'>
            <input
                type="radio"
                value="Within a Month"
                checked={selectedOption === 'Within a Month'}
                onChange={handleOptionChange}
            />
            Within a Month
            </label>
            <label className='option'>
            <input
                type="radio"
                value="Unsure"
                checked={selectedOption === 'Unsure'}
                onChange={handleOptionChange}
            />
            Unsure
            </label>
        </div>
    </div>
}

export default Quickly