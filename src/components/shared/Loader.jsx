import React from "react";
import { RotatingLines } from "react-loader-spinner";
function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        paddingTop: "20px",
      }}
    >
      <RotatingLines height="56px" width="56px" color="black" />
    </div>
  );
}

export default Loader;
