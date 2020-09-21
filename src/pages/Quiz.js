import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Question from "../components/Question";
import questions from "./data/quizData";

function Quiz() {
  console.log("questions", questions);

  return (
    <div className="home__container">
      <section>
        <Link>Begin Quiz!</Link>
        {Object.keys(questions).map((index, question) => {
          console.log("question", questions[index].options);
          const specificOptions = questions[index].options;
          return (
            <>
              <Question
                number={index}
                question={questions[index].question}
                options={specificOptions}
              />
            </>
          );
        })}
      </section>
    </div>
  );
}

export default Quiz;
