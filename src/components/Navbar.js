import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <span><Link to="/">Karir Dokter</Link></span>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
