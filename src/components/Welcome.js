import React from "react";
import welcome from "../images/welcome.gif";

const Welcome = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={welcome} alt="loading" className="md:w-1/2" />
    </div>
  );
};

export default Welcome;
