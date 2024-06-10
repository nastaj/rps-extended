import "../assets/scss/Choice.scss";
import { motion } from "framer-motion";

function Choice({ choice, onPlayerChoice, onStep, i }) {
  function handleChoice() {
    onPlayerChoice(choice);
    onStep("picking");
  }

  return (
    <motion.div
      className={`choice choice--${choice.type}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: i * 0.2 }}
    >
      <button
        className={`choice__btn choice__btn--${choice.type}`}
        onClick={handleChoice}
      >
        <img src={choice.image} alt={choice.type} />
      </button>
    </motion.div>
  );
}

export default Choice;
