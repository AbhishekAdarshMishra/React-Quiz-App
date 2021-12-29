import React, { useContext } from "react";
import { MenuContext } from "../Resource/Contexts";
import logo from "../image/logoQ.png";
import "./MainMenu.css";

function MainMenu() {
  const { quizState, setQuizState,score,setScore } = useContext(MenuContext);
  return (
    <div className="MainMenu">
      <div className="Menu">
              <img src={logo} className="App-logo" alt="LOGO"></img>
        <button
          className="btn btn-danger"
          onClick={() => {
            setQuizState("quiz");
          }}
        >
          {" "}
          <b>Start quiz</b>
        </button>
      </div>
    </div>
  );
}

export default MainMenu;
