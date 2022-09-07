import React, { useEffect, useState } from "react";

export default function Main() {
  const [playerCounter, setPlayerCounter] = useState(0);
  const [computerCounter, setComputerCounter] = useState(0);
  const [userSelection, setUserSelection] = useState("");
  let computerSelection = "";

  const getUserSelection = (event) => {
    setUserSelection(event.currentTarget.id);
  };

  useEffect(() => {
    let compChoices = ["rock", "paper", "scissors"];
    let randomizeChoice = Math.floor(Math.random() * compChoices.length);

    computerSelection = compChoices[randomizeChoice];
  }, [userSelection]);

  //   const playRound(playerSelection, computerSelection) {
  //   let result = ""
  //   if (playerSelection === computerSelection) {
  //     result = "Draw!";
  //   } else if (playerSelection === "rock" && computerSelection === "scissors") {
  //     result = "You Win! Rock beats Scissors";
  //   } else if (playerSelection === "rock" && computerSelection === "paper") {
  //     result = "You Lose! Paper beats Rock";
  //   } else if (playerSelection === "paper" && computerSelection === "rock") {
  //     result = "You Win! Paper beats Rock";
  //   } else if (playerSelection === "paper" && computerSelection === "scissors") {
  //     result = "You Lose! Scissors beats Paper";
  //   } else if (playerSelection === "scissors" && computerSelection === "rock") {
  //     result = "You Lose! Rock beats Scissors";
  //   } else if (playerSelection === "scissors" && computerSelection === "paper") {
  //     result = "You Win! Scissors beats Paper";
  //   }
  //   return result;
  // }

  return (
    <main className="main">
      <div className="scoreboard">
        <h2 className="score-info">Choose your weapon:</h2>
        <h3 className="score-message">First to 5 points takes the crown</h3>
        <div className="scores-container">
          <div className="score-box">
            <div className="sign">❔</div>
            <p className="score">Player: {playerCounter}</p>
          </div>
          <div className="score-box">
            <div className="sign">❔</div>
            <p className="score">Computer: {computerCounter}</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="rock-button" id="rock" onClick={getUserSelection}>
          <div className="sign">✊</div>
        </button>
        <button className="paper-button" id="paper" onClick={getUserSelection}>
          <div className="sign">✋</div>
        </button>
        <button
          className="scissors-button"
          id="scissors"
          onClick={getUserSelection}
        >
          <div className="sign">✌</div>
        </button>
      </div>
    </main>
  );
}
