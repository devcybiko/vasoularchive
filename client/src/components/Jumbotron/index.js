import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ paddingTop: 0, paddingBottom: 0 }}
      className="jumbotron">
      {children}
    </div>
  );
}

export default Jumbotron;
