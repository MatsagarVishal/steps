import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handdleIsOpen() {
    setIsOpen(!isOpen);
  }
  function handdlePrev() {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  function handdleNext() {
    if (step <= 2) {
      setStep(step + 1);
    }
  }
  return (
    <div className="App">
      <span>
        {isOpen ? (
          <button className="button" onClick={handdleIsOpen}>
            Close
          </button>
        ) : (
          <button className="button" onClick={handdleIsOpen}>
            Open
          </button>
        )}
      </span>
      {isOpen ? (
        <Card step={step} handdlePrev={handdlePrev} handdleNext={handdleNext} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
function Card({ step, handdlePrev, handdleNext }) {

  return (
    <div className="card">
      <Eelements
        step={step}
        handdlePrev={handdlePrev}
        handdleNext={handdleNext}
      />
    </div>
  );
}

function Eelements(props) {
  return (
    <>
      <div className="steps">
        <div className={props.step >= 1 ? "active" : ""}>1</div>
        <div className={props.step >= 2 ? "active" : ""}>2</div>
        <div className={props.step >= 3 ? "active" : ""}>3</div>
      </div>
      <div className="main">
        <h1>step : {props.step}</h1>
      </div>
      <div className="btn">
        <button onClick={props.handdlePrev}>Prev</button>
        <button onClick={props.handdleNext}>Next</button>
      </div>
    </>
  );
}
