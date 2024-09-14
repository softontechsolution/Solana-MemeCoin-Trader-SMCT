import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get('/api/portfolio'); // Replace with your API
        setPortfolio(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <div>
      <h2>Portfolio</h2>
      {loading ? (
        <p>Loading portfolio...</p>
      ) : (
        <ul>
          {portfolio.map((coin) => (
            <li key={coin.name}>
              {coin.name}: {coin.amount} coins, worth {coin.value} SOL
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Portfolio;
