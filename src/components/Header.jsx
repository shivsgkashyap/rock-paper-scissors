import React from "react";
import rps from "../images/rps.jpg";

export default function Header() {
  return (
    <header className="navbar-items">
      <img src={rps} alt="Rock,Paper,Scissors Logo" />
      <h1 className="title">ROCK, PAPER, SCISSORS</h1>
    </header>
  );
}
