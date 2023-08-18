import "../assets/scss/Header.scss";

function Header({ score }) {
  return (
    <header className="header">
      <img src="src\assets\images\logo-bonus.svg" alt="RPS Extended logo" />
      <div className="score">
        <span className="score__text">Score</span>
        <span className="score__value">{score}</span>
      </div>
    </header>
  );
}

export default Header;
