import "../assets/scss/Choice.scss";

function Choice({ choice }) {
  return (
    <div className={`choice choice--${choice.type}`}>
      <button className={`choice__btn choice__btn--${choice.type}`}>
        <img src={choice.image} alt={choice.type} />
      </button>
    </div>
  );
}

export default Choice;
