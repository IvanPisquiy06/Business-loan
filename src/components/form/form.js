import './form.css';
import React, { Component } from 'react';
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

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0, // Start from the first question
    };
  }

  handleNextClick = () => {
    this.setState(prevState => ({
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
    }));
  };
  
  handlePreviousClick = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex - 1,
    }));
  };

  handleSubmitClick = () => {
    this.setState({
      currentQuestionIndex: -1, // Set an index that doesn't correspond to any question
    });
  };

  render() {
    const questions = [
      <BusinessType />,
      <QuantitySlider />,
      <Financing />,
      <Quickly />,
      <Date />,
      <Revenue />,
      <Credit />,
      <BusinessName />,
      <Industry />,
      <ZipCode />,
      <Name />,
      <Phone />,
      <Email />
    ];

    const { currentQuestionIndex } = this.state;
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
                <button className='button previous-button' onClick={this.handlePreviousClick}>
                  Previous
                </button>
              )}
              {isLastQuestion ? (
                <button className='button submit-button' onClick={this.handleSubmitClick}>
                  Submit
                </button>
              ) : (
                <button className='button next-button' onClick={this.handleNextClick}>
                  Next
                </button>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default FormComponent;