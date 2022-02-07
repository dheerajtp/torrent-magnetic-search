import React from "react";
import sorry from "../images/error.gif";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mt-5 text-2xl font-bold m-5 text-center">
        Sorry Some Error Occured. Please Try Again After Some Times.
      </p>
      <img
        src={sorry}
        alt="sorry an error occured"
        className="w-1/2 md:w-auto"
      />
    </div>
  );
};

export default Error;
