import "../assets/scss/Rules.scss";
import { animate, motion } from "framer-motion";

function Rules({ handleToggle }) {
  return (
    <motion.div
      className="rules"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="rules__header">
        <h2 className="heading-secondary">Rules</h2>
        <button className="rules__btn" onClick={handleToggle}>
          <img src="images/icon-close.svg" alt="Close button" />
        </button>
      </div>
      <img
        className="rules__img"
        src="images/image-rules-bonus.svg"
        alt="Rules"
      />
    </motion.div>
  );
}

export default Rules;
