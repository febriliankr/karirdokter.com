import React from "react";

function Question({ number, question, options }) {
  const currentNumber = parseInt(number, 10);

  return (
    <div className="question__container">
      <h5 className="question__number">Question {parseInt(number, 10) + 1}</h5>
      <h2 className="question__title">{question}</h2>
      <div className="options-container">
        {Object.keys(options).map((index, value) => {
          return(
          <div className="option">
            <button className="option active"
            >{options[value]}</button>
          </div>);
        })}
      </div>
    </div>
  );
}

export default Question;
