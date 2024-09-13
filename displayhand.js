import React from 'react';
import Card from './Card';

const Hand = ({ cards }) => {
  return (
    <div className="hand">
      <h2>Your Hand</h2>
      <div className="hand-cards">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Hand;