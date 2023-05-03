import React from "react";
import ReactLoading from "react-loading";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {" "}
      <ReactLoading
        type="spin"
        color="#999999"
        height={100}
        width={100}
        className="spinner"
      />
    </div>
  );
};

export default Spinner;
