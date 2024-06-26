import "./styles/App.css";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  return (
    <>
      <Header title={"Memory Cards"} score={score} highscore={highscore} />
    </>
  );
}

export default App;
