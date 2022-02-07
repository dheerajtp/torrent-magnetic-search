import React from "react";
import loading from "../images/loading.gif";

const Searching = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Searching;
