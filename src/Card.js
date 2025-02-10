import { Eelements } from "./Eelements";

export function Card({ step, handdlePrev, handdleNext }) {
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
