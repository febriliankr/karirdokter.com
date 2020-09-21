import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

function Question({ number, question, options, setAnswers, answers }) {

  const [selected, setSelected] = useState(false);

  function handleClick (number, option) {
    console.log("answer", number, ": ", option);
    setAnswers({
      ...answers,
      [number]: option,
    });
    setSelected(true);
    console.log('answers', answers)
  };

  const currentNumber = parseInt(number, 10)+1;

  return (
    <div className="question__container">
      <div 
      className={`question__number ${selected ? `` : null}`}
      >Question {currentNumber} {
        selected ? <span className="answered"><AiFillCheckCircle/></span> : null
      }</div>
      <h2 className="question__title">{question}</h2>
      <div className="options-container">
        {Object.keys(options).map((index, value) => {

          console.log('answer:', answers[currentNumber]);

          return (
            <div 
            key={index} 
            onClick={() => handleClick(currentNumber, options[value])} 
            className={`option ${answers[currentNumber] === options[value] ? 'option-active' : null}`}>
              {options[value]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
