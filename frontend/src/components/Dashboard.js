import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const [priceData, setPriceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const response = await axios.get('/api/price-data'); // Replace with your API
        setPriceData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching price data:', error);
      }
    };
    
    fetchPriceData();
  }, []);

  const chartData = {
    labels: priceData.map((point) => point.time),
    datasets: [
      {
        label: 'Meme Coin Price (SOL)',
        data: priceData.map((point) => point.price),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {loading ? (
        <p>Loading price data...</p>
      ) : (
        <Line data={chartData} />
      )}
    </div>
  );
};

export default Dashboard;
