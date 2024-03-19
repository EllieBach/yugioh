import React, { useState, useEffect } from "react";

const PredefinedDecks = () => {
  const [predefinedDecks, setPredefinedDecks] = useState([]);

  useEffect(() => {
    const fetchPredefinedDecks = async () => {
      try {
        // Fetch predefined decks data from the Yu-Gi-Oh! API
        const response = await fetch("https://db.ygoprodeck.com/api/v7/deckgroup.php");
        if (!response.ok) {
          throw new Error("Failed to fetch predefined decks");
        }
        const data = await response.json();
        const decks = data.data.map(deck => ({
          id: deck.id,
          name: deck.name,
          description: deck.name, // Using the deck name as description for simplicity
          cards: deck.cards.slice(0, 40) // Limiting to 40 cards per deck
        }));
        setPredefinedDecks(decks);
      } catch (error) {
        console.error("Error fetching predefined decks:", error);
      }
    };

    fetchPredefinedDecks();
  }, []);

  return (
    <div>
      <h2>Choose a Pre-defined Deck</h2>
      <div>
        {predefinedDecks.map(deck => (
          <div key={deck.id}>
            <h3>{deck.name}</h3>
            <p>{deck.description}</p>
            <ul>
              {deck.cards.map((card, index) => (
                <li key={index}>{card.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PredefinedDecks;
