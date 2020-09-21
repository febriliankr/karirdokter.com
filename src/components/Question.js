import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

function Question({
  number,
  question,
  options,
  setAnswers,
  answers,
  section,
  description,
}) {
  const [selected, setSelected] = useState(false);

  function handleClick(number, option) {
    console.log("answer", number, ": ", option);
    setAnswers({
      ...answers,
      [number]: option,
    });
    setSelected(true);
    console.log("answers", answers);
  }

  const currentNumber = parseInt(number, 10) + 1;

  return (
    <div className="question__container">
      <div className={`question__number ${selected ? `` : null}`}>
        {section}{" "}
        {selected ? (
          <span className="answered">
            <AiFillCheckCircle />
          </span>
        ) : (
          ""
        )}
      </div>
      <h2 className="question__title">{question}</h2>
      {description ? <div className="question__description">{description}</div> : null}

      <div className="options-container">
        {Object.keys(options).map((index, value) => {
          return (
            <div
              key={index}
              onClick={() => handleClick(currentNumber, options[value])}
              className={`option ${
                answers[currentNumber] === options[value] ? "option-active" : ""
              }
            ${section === "Section 1" ? "smallasf" : "wideasf"}`}
            >
              {options[value]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
