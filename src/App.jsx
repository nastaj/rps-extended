import "./assets/scss/App.scss";
import Header from "./components/Header";
import Choices from "./components/Choices";
import Rules from "./components/Rules";
import Picking from "./components/Picking";
import Result from "./components/Result";
import { useState } from "react";

const choices = [
  {
    type: "rock",
    image: "src/assets/images/icon-rock.svg",
    counters: ["paper", "spock"],
  },
  {
    type: "paper",
    image: "src/assets/images/icon-paper.svg",
    counters: ["scissors", "lizard"],
  },
  {
    type: "scissors",
    image: "src/assets/images/icon-scissors.svg",
    counters: ["rock", "spock"],
  },
  {
    type: "lizard",
    image: "src/assets/images/icon-lizard.svg",
    counters: ["rock", "scissors"],
  },
  {
    type: "spock",
    image: "src/assets/images/icon-spock.svg",
    counters: ["paper", "lizard"],
  },
];

function App() {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});
  const [step, setStep] = useState("setup");
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <main className="app">
      <div className={`overlay ${isOpen ? "darkened" : ""}`}>
        <Header score={score} />
        {step === "setup" && (
          <Choices
            choices={choices}
            onPlayerChoice={setPlayerChoice}
            onStep={setStep}
          />
        )}
        {step === "picking" && (
          <Picking
            choices={choices}
            playerChoice={playerChoice}
            computerChoice={computerChoice}
            onComputerChoice={setComputerChoice}
            onStep={setStep}
          />
        )}
        {step === "result" && (
          <Result
            playerChoice={playerChoice}
            computerChoice={computerChoice}
            onScore={setScore}
            onPlayerChoice={setPlayerChoice}
            onComputerChoice={setComputerChoice}
            onStep={setStep}
          />
        )}
      </div>
      {isOpen && <Rules handleToggle={handleToggle} />}
      <button className="btn-rules" onClick={handleToggle}>
        Rules
      </button>
    </main>
  );
}

export default App;
