import React from "react";
import "./Loader.css"

const style = {
  display: "flex",
  justifyContent: "center",
  margin: ".5rem",
};

export default () => (
  <div style={style}>
    <div className="lds-dual-ring" />
  </div>
);
