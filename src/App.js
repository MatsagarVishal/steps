import { useState } from "react";
import "./App.css";
import { Card } from "./Card";

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handdleIsOpen() {
    setIsOpen(!isOpen);
  }
  function handdlePrev() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function handdleNext() {
    if (step <= 2) {
      setStep((s) => s + 1);
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
