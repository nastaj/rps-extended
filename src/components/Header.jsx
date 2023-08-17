import "../assets/scss/Header.scss";

function Header() {
  return (
    <header className="header">
      <img src="src\assets\images\logo-bonus.svg" alt="RPS Extended logo" />
      <div className="score">
        <span className="score__text">Score</span>
        <span className="score__value">12</span>
      </div>
    </header>
  );
}

export default Header;
