import "../assets/scss/Rules.scss";

function Rules({ handleToggle }) {
  return (
    <div className="rules">
      <div className="rules__header">
        <h2 className="heading-secondary">Rules</h2>
        <button className="rules__btn" onClick={handleToggle}>
          <img src="/src/assets/images/icon-close.svg" alt="Close button" />
        </button>
      </div>
      <img
        className="rules__img"
        src="/src/assets/images/image-rules-bonus.svg"
        alt="Rules"
      />
    </div>
  );
}

export default Rules;
