import React, { useState } from "react";
import Question from "../components/Question";
import questions from "./data/quizData";

function Quiz() {

  const [answers, setAnswers] = useState({
    1: ''
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

        {JSON.stringify(answers)}
      </section>
    </div>
  );
}

export default Quiz;
