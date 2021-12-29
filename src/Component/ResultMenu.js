import React,{ useContext} from "react";
import "./ResultMenu.css";
import check from "../image/check.png";
import { MenuContext } from "../Resource/Contexts";
import { Questions } from "../Resource/Question";
function ResultMenu() {
  const { quizState, setQuizState, score, setScore } = useContext(MenuContext);
  const start = () => {
    setQuizState("main");
    setScore(0);
  };
  return (
    <div className="ResultMenu">
      <img src={check}></img>
      <h2>
        <b>You have successfully submitted the Assessment</b>
      </h2>
      <h4>
        <b>Question Asked : </b>{Questions.length}
      </h4>
      <h4>
        <b>Question Corrected : </b>{score}
      </h4>
      <h4>
        <b>Your Score : </b>{(score*100)/Questions.length}
      </h4>

      <button className="btn btn-danger" onClick={()=>start()}>Start Again</button>
    </div>
  );
}

export default ResultMenu;
