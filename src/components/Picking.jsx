import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      className="step-picking"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
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
            <motion.button
              className={`choice__btn choice__btn--${computerChoice.type}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <img src={computerChoice.image} alt={computerChoice.type} />
            </motion.button>
          ) : (
            ""
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Picking;
