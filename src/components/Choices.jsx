import "../assets/scss/Choices.scss";
import Choice from "./Choice";
import { choices } from "../helpers/constants";

function Choices({ onPlayerChoice, onStep }) {
  return (
    <div className="choices">
      {choices.map((choice, i) => (
        <Choice
          choice={choice}
          key={choice.type}
          i={i}
          onPlayerChoice={onPlayerChoice}
          onStep={onStep}
        />
      ))}
    </div>
  );
}

export default Choices;
