import React, { createContext, useReducer } from "react";
export const CarContext = createContext();

const prevState = {
  switchOn: false,
  speed: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "onOff":
      if (!state.switchOn && state.speed === 0) {
        return { ...state, switchOn: true };
      } else if (state.switchOn && state.speed !== 0) {
        return state;
      } else {
        return { ...state, switchOn: false };
      }
    case "brake":
      if (state.switchOn && state.speed > 0) {
        return {
          ...state,
          speed: state.speed - 10,
        };
      } else {
        alert("cannot brake");
      }
      return state;

    case "accelerate":
      if (state.switchOn && state.speed < 240) {
        return {
          ...state,
          speed: state.speed + 10,
        };
      } else if (state.speed === 240) {
        alert("Yor are driving at Maximum speed");
      } else {
        alert("cannot accelerate");
      }
      return state;

    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, prevState);

  return (
    <CarContext.Provider value={{ state, dispatch }}>
      {children}
    </CarContext.Provider>
  );
};

export default ContextProvider;
