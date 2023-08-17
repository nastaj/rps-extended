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
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <main className="app">
      <div className={`overlay ${isOpen ? "darkened" : ""}`}>
        <Header />
        {step === 1 && <Choices choices={choices} />}
        {step === 2 && <Picking />}
        {step === 3 && <Result />}
      </div>
      {isOpen && <Rules handleToggle={handleToggle} />}
      <button className="btn-rules" onClick={handleToggle}>
        Rules
      </button>
    </main>
  );
}

export default App;
