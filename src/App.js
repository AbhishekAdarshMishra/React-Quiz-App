import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React,{useState,useContext} from "react"
import MainMenu from "./Component/MainMenu";
import QuizMenu from "./Component/QuizMenu";
import ResultMenu from "./Component/ResultMenu";
import { MenuContext } from "./Resource/Contexts";
function App() {
  const [quizState,setQuizState] = useState("main");
  const [score,setScore] = useState(0);
  return (
    <div className="App">
      <div className="App-header">Quiz App</div>
      <MenuContext.Provider value={{quizState,setQuizState,score,setScore}}>
        {quizState === "main" && <MainMenu />}
        {quizState === "quiz" && <QuizMenu />}
        {quizState === "result" && <ResultMenu />}
      </MenuContext.Provider>
    </div>
  );
}

export default App;
