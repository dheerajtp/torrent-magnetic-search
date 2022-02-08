import React from "react";
import welcome from "../images/welcome.gif";

const Welcome = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mx-10 bg-green-200 mt-3">
        <p className="p-4 text-justify">
          A place where you can search for torrent magnetic links...!! Enter
          your search item and press the enter key to search for your item.
        </p>
      </div>
      <img src={welcome} alt="loading" className="md:w-1/2" />
    </div>
  );
};

export default Welcome;
