import { useEffect, useState } from "react";
import "../assets/scss/Result.scss";

function Result({
  playerChoice,
  computerChoice,
  onScore,
  onPlayerChoice,
  onComputerChoice,
  onStep,
}) {
  const [playerIsWinner, setPlayerIsWinner] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  useEffect(() => {
    const isCountered = playerChoice.counters.includes(computerChoice.type);
    const isDrawn = playerChoice.type === computerChoice.type;

    setPlayerIsWinner(!isCountered);
    setIsDraw(isDrawn);

    onScore((score) => {
      if (isCountered && !isDrawn) {
        return score > 0 ? score - 1 : score;
      }
      if (!isCountered && !isDrawn) {
        return score + 1;
      }
      if (isDrawn) {
        return score;
      }
    });
  }, []);

  function handleReset() {
    setPlayerIsWinner(false);
    setIsDraw(false);
    onPlayerChoice({});
    onComputerChoice({});
    onStep("setup");
  }

  return (
    <div className="step-result">
      <div className="step-picking__player">
        <h3 className="heading-tertiary">You picked</h3>
        <div className={`choice choice--${playerChoice.type}`}>
          <button className={`choice__btn choice__btn--${playerChoice.type}`}>
            <img src={playerChoice.image} alt={playerChoice.type} />
          </button>
        </div>
      </div>
      <div className="step-conclusion">
        <h1 className="heading-primary">
          {playerIsWinner && !isDraw && "You win"}
          {!playerIsWinner && !isDraw && "You lose"}
          {isDraw && "Draw"}
        </h1>
        <button className="step-result__btn" onClick={handleReset}>
          Play Again
        </button>
      </div>
      <div className="step-picking__computer">
        <h3 className="heading-tertiary">The House picked</h3>
        <div className={`choice choice--${computerChoice.type}`}>
          <button className={`choice__btn choice__btn--${computerChoice.type}`}>
            <img src={computerChoice.image} alt={computerChoice.type} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
