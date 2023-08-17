import "../assets/scss/Choices.scss";
import Choice from "./Choice";

function Choices({ choices }) {
  return (
    <div className="choices">
      {choices.map((choice) => (
        <Choice choice={choice} key={choice.type} />
      ))}
    </div>
  );
}

export default Choices;
