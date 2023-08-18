import "../assets/scss/Choices.scss";
import Choice from "./Choice";

function Choices({ choices, onPlayerChoice, onStep }) {
  return (
    <div className="choices">
      {choices.map((choice) => (
        <Choice
          choice={choice}
          key={choice.type}
          onPlayerChoice={onPlayerChoice}
          onStep={onStep}
        />
      ))}
    </div>
  );
}

export default Choices;
