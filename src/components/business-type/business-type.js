import React, { useState } from 'react';
import './business-type.css';
import { BsBuildings } from "react-icons/bs";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { FaRegHandshake } from "react-icons/fa"
import { SlPeople } from "react-icons/sl"
import { VscPerson } from "react-icons/vsc"

function BusinessType() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const cardOptions = [
    { icon: <VscPerson className='card-icon' />, text: 'Sole Proprietor' },
    { icon: <FaRegHandshake className='card-icon' />, text: 'Partnership' },
    { icon: <SlPeople className='card-icon' />, text: 'Limited Liability Company (LLC)' },
    { icon: <BsBuildings className='card-icon' />, text: 'C Corporation' },
    { icon: <HiOutlineBuildingStorefront className="card-icon" />, text: 'S Corporation' },
  ];

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  return (
    <div>
      <h2>What type of business do you own?</h2>
      <ul className='business-options'>
        {cardOptions.map((option, index) => (
          <li
            key={index}
            className={`card ${selectedCardIndex === index ? 'selected' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {option.icon}
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusinessType;