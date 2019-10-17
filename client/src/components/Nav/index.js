import React from "react";
import "./style.css";

function Nav({children}) {
  return (
    <nav className="navbar">
      {children}
    </nav>
  );
}

export default Nav;
