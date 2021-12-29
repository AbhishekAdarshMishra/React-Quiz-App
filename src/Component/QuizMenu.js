import React, { useState, useEffect, useContext } from "react";
import { Questions } from "../Resource/Question";
import "./QuizMenu.css";
import { MenuContext } from "../Resource/Contexts";
import left from "../image/left.png";
import right from "../image/right.png";
import answer from "../image/answer.png";
import quiz from "../image/quiz.png";
let interval = undefined;
function QuizMenu() {
  const [questionNum, setQuestionNum] = useState(0);
  const [optionChoice, setOptionChoice] = useState([]);
  const [answerChoice, setAnswerChoice] = useState([]);
  const { quizState, setQuizState, score, setScore } = useContext(MenuContext);
  const [running, setRunning] = useState(true);
  const [second, setSecond] = useState(30);

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setSecond((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if (second === 0) {
      setRunning(false);
      clearInterval(interval);
      submit();
    }
  }, [second]);
  useEffect(() => {
    if (Questions.length > 0) {
      const initialState = Questions.map((obj) => "Not Selected");
      setOptionChoice(initialState);
      const initialState1 = Questions.map((obj) => "");
      setAnswerChoice(initialState1);
    }
  }, [Questions]);
  const onChangeHandler = (ans) => (event) => {
    let newArr = [...optionChoice];
    newArr[questionNum] = event.target.value;
    setOptionChoice(newArr);
    let newArr1 = [...answerChoice];
    newArr1[questionNum] = ans;
    setAnswerChoice(newArr1);
  };
  const next = () => {
    setQuestionNum(questionNum + 1);
  };
  const prev = () => {
    setQuestionNum(questionNum - 1);
  };
  const submit = () => {
    let marks = 0;
    Questions.map((Question, index) => {
      if (Question.Answer == optionChoice[index]) {
        marks = marks + 1;
      }
    });
    setScore(marks);
    setQuizState("result");
  };
  return (
    <div className="Quiz">
      <div className="TimerParent">
        <div className="Timer">Time Left : {second}</div>
      </div>

      <div className="row">
        <div className="col-md-2">
          <div className="Ans">
            <img src={answer} width="80px" height="80px"></img>
            <div className="Ques-Header">
              <h2>
                <b>Selected Answer</b>
              </h2>
            </div>
            <div className="Opt">
              <ul>
                {optionChoice.map((val, index) => (
                  <li>
                    {index + 1} : ({val}) {answerChoice[index]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="Ques">
            <img src={quiz} width="80px" height="80px"></img>
            <div className="Ques-Header">
              <div className="col-md-2 m-2">
                {questionNum != 0 && (
                  <img
                    src={left}
                    onClick={() => prev()}
                    width="40px"
                    height="40px"
                  ></img>
                )}
              </div>
              <div className="col-md-8 m-2">
                <h2>
                  <b>Attempt Question Here</b>
                </h2>
              </div>
              <div className="col-md-2 m-2">
                {questionNum < Questions.length - 1 && (
                  <img
                    src={right}
                    onClick={() => next()}
                    width="40px"
                    height="40px"
                  ></img>
                )}
              </div>
            </div>
            <h3>{Questions[questionNum].Ques}</h3>
            <div className="Option">
              <h4>
                <input
                  type="radio"
                  value="A"
                  name="option"
                  checked={optionChoice[questionNum] === "A"}
                  onChange={onChangeHandler(Questions[questionNum].A)}
                />{" "}
                {Questions[questionNum].A}
              </h4>
              <br></br>
              <h4>
                <input
                  type="radio"
                  value="B"
                  name="option"
                  checked={optionChoice[questionNum] === "B"}
                  onChange={onChangeHandler(Questions[questionNum].B)}
                />{" "}
                {Questions[questionNum].B}
              </h4>
              <br></br>
              <h4>
                <input
                  type="radio"
                  value="C"
                  name="option"
                  checked={optionChoice[questionNum] === "C"}
                  onChange={onChangeHandler(Questions[questionNum].C)}
                />{" "}
                {Questions[questionNum].C}
              </h4>
              <br></br>
              <h4>
                <input
                  type="radio"
                  value="D"
                  checked={optionChoice[questionNum] === "D"}
                  onChange={onChangeHandler(Questions[questionNum].D)}
                  name="option"
                />{" "}
                {Questions[questionNum].D}
              </h4>
              <br></br>
            </div>
            <div className="submitBtn">
              {questionNum === Questions.length - 1 && (
                <button className="btn btn-success" onClick={() => submit()}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizMenu;
