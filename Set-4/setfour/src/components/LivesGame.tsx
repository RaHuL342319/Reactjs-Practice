import { useState } from "react";

const LivesGame = () => {
  const [lives, setLives] = useState(3); // You can set any initial number of lives

  const handleDecrement = () => {
    if (lives > 0) setLives(lives - 1);
  };

  return (
    <div style={{ border: "1px solid", padding: "16px", width: "200px" }}>
      <h3>Lives: {lives}</h3>
      {lives > 0 ? (
        <button onClick={handleDecrement}>Lose a Life</button>
      ) : (
        <h2 style={{ color: "red" }}>Game Over</h2>
      )}
    </div>
  );
};

export default LivesGame;
