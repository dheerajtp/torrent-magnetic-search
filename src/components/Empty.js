import React from "react";
import empty from "../images/empty.png";

const Empty = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mt-5 text-2xl font-bold m-5 text-center">
        Sorry Nothing Found.
      </p>
      <img src={empty} alt="sorry an error occured" />
    </div>
  );
};

export default Empty;
