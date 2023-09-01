import './form.css';
import React from 'react';
import { useState } from "react";
import BusinessType from '../business-type/business-type';
import QuantitySlider from '../money-needed/money-needed';
import Financing from '../financing/financing';
import Quickly from '../quickly/quickly';
import Date from '../date/date';
import Revenue from '../revenue/revenue';
import Credit from '../credit/credit';
import BusinessName from '../business-name/business-name';
import Industry from '../industry/industry';
import ZipCode from '../zipCode/zipCode';
import Name from '../name/name';
import Phone from '../phone/phone';
import Email from '../email/email';
import ThankYou from '../thank-you/thank-you';

const FormComponent = () => {
  const [full, setFull] = useState(false)

  const [business, setBusiness] = useState();
  const [type, setType] = useState("");
  const [money, setMoney] = useState(10000);
  const [financing, setFinancing] = useState("");
  const [quickly, setQuickly] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [revenue, setRevenue] = useState(0);
  const [credit, setCredit] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [zip, setZip] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextClick = () => {
    if (full === true){
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else{
      return alert("Please, complete the field above")
    }
    setFull(false)
  };

  const handlePreviousClick = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex - 1);
  };

  const handleSubmitClick = () => {
    const strippedPhoneNumber = phone.replace(/\D/g, "");
    const formData = {
      "companyName": businessName,
      "postalCode": zip,
      "firstName": firstName,
      "lastName": lastName,
      "name": firstName + " " + lastName,
      "phone": strippedPhoneNumber,
      "email": email,
      "tags": [
        "Business Loan"
      ],
      "customField": {
          "ck3Vgt8MxxocvH12upbi": type,
          "EtsmH6nELzxJfJw2ttlD": money,
          "EuoeNIKXSwkwZSLrO8PN": financing,
          "MtQ5MRgmL93Qa9j4vpLI": quickly,
          "8PChtflGjccZZIRtV59Z": month + " " + year,
          "rSTWMZX6cGTGVxxLn2Cr": revenue,
          "UkONVKbTsqQtU2b9x5ro": industry,
          "XJ2sSfUFl7i8DsyWICpw": credit,
        }
    };
  
    // Make the POST request to the specified URL
    fetch('https://rest.gohighlevel.com/v1/contacts/', {
      method: 'POST',
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IldUWENtV1U3bFpZYjlKWHBwRkowIiwiY29tcGFueV9pZCI6Im5tQ1MwYUwzYlhKZ2pWem95UkttIiwidmVyc2lvbiI6MSwiaWF0IjoxNjg5ODczNDgwMjc5LCJzdWIiOiJ1c2VyX2lkIn0.k0ijGcMSPDd6qC9L2UzDhfcgfzLu0ZuLcFX6hpvLj2w",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle the successful response here, e.g., show a success message
        console.log('Data sent successfully:', data);
        setCurrentQuestionIndex(-1); // Move to the thank you page or any other appropriate action
      })
      .catch((error) => {
        // Handle errors here, e.g., show an error message
        console.error('Error:', error);
      });
  };

    const questions = [
      <BusinessType text={type} setText={setType} value={business} setValue={setBusiness} full={full} isFull={setFull} />,
      <QuantitySlider value={money} setValue={setMoney} full={full} isFull={setFull} />,
      <Financing value={financing} setValue={setFinancing} isFull={setFull} />,
      <Quickly value={quickly} setValue={setQuickly} isFull={setFull} />,
      <Date monthValue={month} yearValue={year} setMonthValue={setMonth} setYearValue={setYear} isFull={setFull} />,
      <Revenue value={revenue} setValue={setRevenue} isFull={setFull} />,
      <Credit value={credit} setValue={setCredit} isFull={setFull} />,
      <BusinessName value={businessName} setValue={setBusinessName} isFull={setFull} />,
      <Industry value={industry} setValue={setIndustry} isFull={setFull} />,
      <ZipCode value={zip} setValue={setZip} isFull={setFull} />,
      <Name firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} isFull={setFull} />,
      <Phone value={phone} setValue={setPhone} isFull={setFull} />,
      <Email value={email} setValue={setEmail} isFull={setFull} />
    ];

    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    return (
      <div className='container'>
        {currentQuestionIndex === -1 ? (
          <ThankYou />
        ) : (
          <>
            {questions[currentQuestionIndex]}
            <div className='buttons'>
              {currentQuestionIndex > 0 && (
                <button className='button previous-button' onClick={handlePreviousClick}>
                  Previous
                </button>
              )}
              {isLastQuestion ? (
                <button className='button submit-button' onClick={handleSubmitClick}>
                  Submit
                </button>
              ) : (
                <button className='button next-button' onClick={handleNextClick}>
                  Next
                </button>
              )}
            </div>
          </>
        )}
      </div>
    );
}

export default FormComponent;