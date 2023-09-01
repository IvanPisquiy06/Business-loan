import React from 'react';
import './business-type.css';
import { BsBuildings } from "react-icons/bs";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { FaRegHandshake } from "react-icons/fa"
import { SlPeople } from "react-icons/sl"
import { VscPerson } from "react-icons/vsc"

const BusinessType = (props) => {

  const cardOptions = [
    { icon: <VscPerson className='card-icon' />, text: 'Sole Proprietor' },
    { icon: <FaRegHandshake className='card-icon' />, text: 'Partnership' },
    { icon: <SlPeople className='card-icon' />, text: 'Limited Liability Company (LLC)' },
    { icon: <BsBuildings className='card-icon' />, text: 'C Corporation' },
    { icon: <HiOutlineBuildingStorefront className="card-icon" />, text: 'S Corporation' },
  ];

  const handleCardClick = (index, text) => {
    props.setValue(index);
    props.setText(text)
    props.isFull(true)
  };

  return (
    <div>
      <h2>What type of business do you own?</h2>
      <ul className='business-options'>
        {cardOptions.map((option, index) => (
          <li
            key={index}
            className={`card ${props.value === index ? 'selected' : ''}`}
            value={props.text}
            onClick={() => handleCardClick(index, option.text)}
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