import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function GameDetail() {
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/games/${id}`)
      .then(response => setGame(response.data))
      .catch(error => console.error('Error fetching game details:', error));
  }, [id]);

  return (
    <div>
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      {/* Additional details like release date, genre, etc. can be added here */}
    </div>
  );
}

export default GameDetail;

