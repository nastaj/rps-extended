import "../assets/scss/Header.scss";
import { animate, motion } from "framer-motion";

function Header({ score }) {
  return (
    <motion.header
      className="header"
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1 }}
    >
      <img src="images\logo-bonus.svg" alt="RPS Extended logo" />
      <div className="score">
        <span className="score__text">Score</span>
        <span className="score__value">{score}</span>
      </div>
    </motion.header>
  );
}

export default Header;
