import React, { useState } from "react";
import Question from "../components/Question";
import questions from "./data/quizData";

function Quiz() {
  const [answers, setAnswers] = useState({
    1: "",
  });

  //console.log("questions", questions);

  return (
    <div className="home__container">
      <section>
        {Object.keys(questions).map((index, question) => {
          //console.log("question", questions[index].options);
          const specificOptions = questions[index].options;
          return (
            <>
              <Question
                answers={answers}
                setAnswers={setAnswers}
                number={index}
                question={questions[index].question}
                options={specificOptions}
              />
            </>
          );
        })}

        <div className="question__container">
        <h2>Output for Debugging</h2>
          <div className="options-container">{JSON.stringify(answers)}</div>
        </div>
      </section>
    </div>
  );
}

export default Quiz;
