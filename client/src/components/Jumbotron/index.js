import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ clear: "both", paddingTop: 50 }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
