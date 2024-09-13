import React, { useState } from 'react';
import Board from './components/Board';
import Hand from './components/Hand';

function App() {
  const [playerLife, setPlayerLife] = useState(20);
  const [opponentLife, setOpponentLife] = useState(20);
  const [playerHand, setPlayerHand] = useState([]);
  const [playerDeck, setPlayerDeck] = useState(generateDeck()); // Generate random deck
  const [gamePhase, setGamePhase] = useState('draw');
  
  const drawCard = () => {
    if (playerDeck.length > 0) {
      const drawnCard = playerDeck[0];
      setPlayerHand([...playerHand, drawnCard]);
      setPlayerDeck(playerDeck.slice(1));
    }
  };
  
  const nextPhase = () => {
    const phases = ['draw', 'main', 'combat', 'end'];
    setGamePhase(phases[(phases.indexOf(gamePhase) + 1) % phases.length]);
  };
  
  return (
    <div className="App">
      <h1>Magic: The Gathering Online</h1>
      <div>
        <p>Player Life: {playerLife}</p>
        <p>Opponent Life: {opponentLife}</p>
        <button onClick={drawCard}>Draw Card</button>
        <button onClick={nextPhase}>Next Phase</button>
      </div>
      <Board />
      <Hand cards={playerHand} />
    </div>
  );
}

const generateDeck = () => {
  // Dummy deck with 60 random cards (for example)
  const deck = Array(60).fill().map((_, i) => ({
    name: `Card ${i + 1}`,
    manaCost: `{${Math.floor(Math.random() * 6)}}`
  }));
  return deck;
};

export default App;

