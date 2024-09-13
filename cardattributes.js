import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      <h3>{card.name}</h3>
      <p>Mana Cost: {card.manaCost}</p>
    </div>
  );
};

export default Card;