import React, { useState } from 'react';
import axios from 'axios';

const TradeForm = () => {
  const [amount, setAmount] = useState('');
  const [coin, setCoin] = useState('meme-coin');
  const [type, setType] = useState('buy');
  const [message, setMessage] = useState('');

  const handleTrade = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/trade', {
        amount,
        coin,
        type,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Trade error:', error);
      setMessage('Trade failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Place Trade</h2>
      <form onSubmit={handleTrade}>
        <div>
          <label>Coin:</label>
          <select value={coin} onChange={(e) => setCoin(e.target.value)}>
            <option value="meme-coin">Meme Coin</option>
            {/* Add other coin options if needed */}
          </select>
        </div>

        <div>
          <label>Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>

        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button type="submit">Execute Trade</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TradeForm;
