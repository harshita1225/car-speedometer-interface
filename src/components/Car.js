import React, { useContext } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { CarContext } from "./CarContext";

export default function Car() {
  const { state, dispatch } = useContext(CarContext);

  console.log(state);

  return (
    <div className="car">
      {state.switchOn && (
        <ReactSpeedometer
          value={state.speed}
          minValue={0}
          maxValue={300}
          currentValueText={`${state.speed} km/h`}
          needleTransitionDuration={100}
        />
      )}
      <div>
        <button onClick={() => dispatch({ type: "onOff" })}>
          {state.switchOn ? "Turn Off" : "Turn On"}
        </button>
        <button onClick={() => dispatch({ type: "accelerate" })}>
          Accelerate
        </button>
        <button onClick={() => dispatch({ type: "brake" })}>Brake</button>
      </div>
    </div>
  );
}
