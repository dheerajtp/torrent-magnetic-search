import React,{ createContext, useState } from "react";

export const ResultContext = createContext();

export const ResultProvider = (props) => {
  const [magneticResult, setMagneticResult] = useState([]);
  return (
    <ResultContext.Provider value={[magneticResult, setMagneticResult]}>
      {props.children}
    </ResultContext.Provider>
  );
};
