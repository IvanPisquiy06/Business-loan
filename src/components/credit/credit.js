import './credit.css'
import React, { useState } from 'react';

function Credit(){
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    };
    return <div className='container'>
        <h2>What's your credit score?</h2>
        <div className='options'>
            <label className='option'>
            <input
                type="radio"
                value="Excellent"
                checked={selectedOption === 'Excellent'}
                onChange={handleOptionChange}
            />
            Excellent (720+)
            </label >
            <label className='option'>
            <input
                type="radio"
                value="Good"
                checked={selectedOption === 'Good'}
                onChange={handleOptionChange}
            />
            Good (680 - 719)
            </label>
            <label className='option'>
            <input
                type="radio"
                value="Fair"
                checked={selectedOption === 'Fair'}
                onChange={handleOptionChange}
            />
            Fair (640 - 679)
            </label>
            <label className='option'>
            <input
                type="radio"
                value="Poor"
                checked={selectedOption === 'Poor'}
                onChange={handleOptionChange}
            />
            Poor (639 or less)
            </label>
        </div>
    </div>
}

export default Credit