import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/games')
      .then(response => setGames(response.data))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  return (
    <div>
      <h1>Game Reviews</h1>
      <ul>
        {games.map(game => (
          <li key={game._id}>
            <Link to={`/game/${game._id}`}>{game.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;

