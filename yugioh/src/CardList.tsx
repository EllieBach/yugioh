import  { useState, useEffect } from 'react';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCards(data.data); // Assuming the card data is located in the 'data' property
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCards();
  }, []); 

  return (
    <div>
      <h2>Yu-Gi-Oh! Card List</h2>
      <ul>
        {cards.map(card => (
          <li key={card.id}>
            <strong>{card.name}</strong> - {card.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
