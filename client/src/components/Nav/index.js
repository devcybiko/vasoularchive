import React from "react";
import "./style.css";

function Nav({children}) {
  return (
    <nav className="navbar">
      <ul className="breadcrumbs">
      {children}
      </ul>
    </nav>
  );
}

export default Nav;
