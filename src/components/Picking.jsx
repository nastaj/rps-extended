import { useState, useEffect } from "react";
import "../assets/scss/Choice.scss";
import "../assets/scss/Picking.scss";

function Picking({
  choices,
  playerChoice,
  computerChoice,
  onComputerChoice,
  onStep,
}) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const randIndex = Math.floor(Math.random() * (choices.length - 1));
    onComputerChoice(choices[randIndex]);

    setTimeout(() => {
      setIsShown(true);
    }, "2000");

    setTimeout(() => {
      onStep("result");
    }, "4000");
  }, []);

  return (
    <div className="step-picking">
      <div className="step-picking__player">
        <h3 className="heading-tertiary">You picked</h3>
        <div className={`choice choice--${playerChoice.type}`}>
          <button className={`choice__btn choice__btn--${playerChoice.type}`}>
            <img src={playerChoice.image} alt={playerChoice.type} />
          </button>
        </div>
      </div>
      <div className="step-picking__computer">
        <h3 className="heading-tertiary">The House picked</h3>
        <div
          className={`${isShown ? "choice" : "choice--blanked"} choice--${
            computerChoice.type
          }`}
        >
          {isShown ? (
            <button
              className={`choice__btn choice__btn--${computerChoice.type}`}
            >
              <img src={computerChoice.image} alt={computerChoice.type} />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Picking;
