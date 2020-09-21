import React from "react";

function Question({ number, question, options, setAnswers, answers }) {


  function handleClick (number, option) {
    console.log("answer", number, ": ", option);
    setAnswers({
      ...answers,
      [number]: option,
    });

    console.log('answers', answers)
  };

  const currentNumber = parseInt(number, 10)+1;

  return (
    <div className="question__container">
      <h5 className="question__number">Question {currentNumber}</h5>
      <h2 className="question__title">{question}</h2>
      <div className="options-container">
        {Object.keys(options).map((index, value) => {

          console.log('answer:', answers[currentNumber]);

          return (
            <div 
            key={index} 
            onClick={() => handleClick(currentNumber, options[value])} 
            className={`option ${answers[currentNumber] === options[value] ? 'option-active' : null}`}>
              {parseInt(index, 10)+1}. {options[value]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
