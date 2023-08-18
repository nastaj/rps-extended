import "../assets/scss/Choice.scss";

function Choice({ choice, onPlayerChoice, onStep }) {
  function handleChoice() {
    onPlayerChoice(choice);
    onStep("picking");
  }

  return (
    <div className={`choice choice--${choice.type}`}>
      <button
        className={`choice__btn choice__btn--${choice.type}`}
        onClick={handleChoice}
      >
        <img src={choice.image} alt={choice.type} />
      </button>
    </div>
  );
}

export default Choice;
