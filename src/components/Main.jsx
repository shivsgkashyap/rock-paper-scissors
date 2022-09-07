import React, { useEffect, useState } from "react";

export default function Main() {
  const [playerCounter, setPlayerCounter] = useState(0);
  const [computerCounter, setComputerCounter] = useState(0);
  const [userSelection, setUserSelection] = useState("");
  const [computerSelection, setComputerSelection] = useState("");
  const [scoreInfo, setScoreInfo] = useState("Choose your weapon:");
  const [scoreMessage, setScoreMessage] = useState(
    "First to 5 points takes the crown"
  );

  const getUserSelection = (event) => {
    setUserSelection(event.currentTarget.id);
    setComputerSelection(getComputerChoice);
    playRound();
  };

  const getComputerChoice = () => {
    let compChoices = ["rock", "paper", "scissors"];
    let randomizeChoice = Math.floor(Math.random() * compChoices.length);

    return compChoices[randomizeChoice];
  };

  const playRound = () => {
    if (userSelection === computerSelection) {
      setScoreInfo("Draw!!");
      setScoreMessage("It's A Tie!");
    }
    if (userSelection === "rock" && computerSelection === "scissors") {
      setScoreInfo("You Win!!");
      setScoreMessage("Rock beats Scissors!");
      setPlayerCounter(playerCounter + 1);
    }
    if (userSelection === "rock" && computerSelection === "paper") {
      setScoreInfo("You Lose!!");
      setScoreMessage("Paper beats Rock!");
      setComputerCounter(computerCounter + 1);
    }
    if (userSelection === "paper" && computerSelection === "rock") {
      setScoreInfo("You Win!!");
      setScoreMessage("Paper beats Rock!");
      setPlayerCounter(playerCounter + 1);
    }
    if (userSelection === "paper" && computerSelection === "scissors") {
      setScoreInfo("You Lose!!");
      setScoreMessage("Scissors beats Paper!");
      setComputerCounter(computerCounter + 1);
    }
    if (userSelection === "scissors" && computerSelection === "rock") {
      setScoreInfo("You Lose!!");
      setScoreMessage("Rock beats Scissors!");
      setComputerCounter(computerCounter + 1);
    }
    if (userSelection === "scissors" && computerSelection === "paper") {
      setScoreInfo("You Win!!");
      setScoreMessage("Scissors beats Paper!");
      setPlayerCounter(playerCounter + 1);
    }
  };

  return (
    <main className="main">
      <div className="scoreboard">
        <h2 className="score-info">{scoreInfo}</h2>
        <h3 className="score-message">{scoreMessage}</h3>
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
