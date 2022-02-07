import React,{ useState, createContext } from "react";

export const GotOrNotContext = createContext();

export const GotOrNotProvider = (props) => {
  const [gotOrNot, setGotOrNot] = useState(false);

  return (
    <GotOrNotContext.Provider value={[gotOrNot, setGotOrNot]}>
      {props.children}
    </GotOrNotContext.Provider>
  );
};
