import React, { useState } from "react";
import Question from "../components/Question";
import questionsBank from "./data/quizData";

function Quiz() {
  const [answers, setAnswers] = useState({
    1: "",
  });

  //console.log("questionsBank", questionsBank);

  return (
    <div className="quiz__container">
    
    <div className="quiz__heading">
    <h1>Tes Spesialis</h1>
    <h3>Cari tahu spesialis apa yang cocok untukmu</h3>
    </div>
      <section>
        {Object.keys(questionsBank).map((index, question) => {
          //console.log("question", questionsBank[index].options);
          const specificOptions = questionsBank[index].options;
          return (
            <>
              <Question
                answers={answers}
                setAnswers={setAnswers}
                section={questionsBank[index].section}
                description={questionsBank[index].description}
                number={index}
                question={questionsBank[index].question}
                options={specificOptions}
              />
            </>
          );
        })}

        <div className="question__container">
        <h2>Output for Debugging</h2>
          <div className="dummy-debug">{JSON.stringify(answers)}</div>
        </div>
      </section>
    </div>
  );
}

export default Quiz;
