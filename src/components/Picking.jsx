import "../assets/scss/Choice.scss";
import "../assets/scss/Picking.scss";

function Picking() {
  return (
    <div className="step-picking">
      <div className="step-picking__player">
        <h3 className="heading-tertiary">You picked</h3>
        <div className={`choice choice--paper`}>
          <button className={`choice__btn choice__btn--paper`}>
            <img src="src/assets/images/icon-paper.svg" alt="paper" />
          </button>
        </div>
      </div>
      <div className="step-picking__computer">
        <h3 className="heading-tertiary">The House picked</h3>
        <div className={`choice--blanked choice--rock`}>
          {/* <button className={`choice__btn choice__btn--rock`}>
            <img src="src/assets/images/icon-rock.svg" alt="rock" />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Picking;
