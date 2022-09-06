import React from "react";

export default function Main() {
  return (
    <main class="main">
      <div class="scoreboard">
        <h2 class="score-info">Choose your weapon:</h2>
        <h3 class="score-message">First to 5 points takes the crown</h3>
        <div class="scores-container">
          <div class="score-box">
            <div class="sign">❔</div>
            <p class="score">Player: 0</p>
          </div>
          <div class="score-box">
            <div class="sign">❔</div>
            <p class="score">Computer: 0</p>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="rock-button">
          <div class="sign">✊</div>
        </button>
        <button class="paper-button">
          <div class="sign">✋</div>
        </button>
        <button class="scissors-button">
          <div class="sign">✌</div>
        </button>
      </div>
    </main>
  );
}
