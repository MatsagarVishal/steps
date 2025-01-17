import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
function Card() {
  const [step, setStep] = useState(1);
  function handdlePrev() {
    setStep(step - 1);
  }
  function handdleNext() {
    setStep(step + 1);
  }
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
        <span className={props.step === 1 ? "active" : ""}>1</span>
        <span className={props.step === 2 ? "active" : ""}>2</span>
        <span className={props.step === 3 ? "active" : ""}>3</span>
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
