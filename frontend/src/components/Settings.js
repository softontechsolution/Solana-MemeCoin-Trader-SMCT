import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Settings = () => {
  const [apiKey, setApiKey] = useState('');
  const [botEnabled, setBotEnabled] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get('/api/settings'); // Fetch current settings
        setApiKey(response.data.apiKey);
        setBotEnabled(response.data.botEnabled);
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  }, []);

  const handleSave = async () => {
    try {
      await axios.post('/api/settings', { apiKey, botEnabled });
      alert('Settings saved successfully.');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Failed to save settings.');
    }
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>API Key:</label>
        <input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={botEnabled}
            onChange={(e) => setBotEnabled(e.target.checked)}
          />
          Enable Trading Bot
        </label>
      </div>

      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default Settings;
