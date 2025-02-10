export function Eelements(props) {
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
