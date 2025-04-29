const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Enable CORS for all origins with specific options
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
}));

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'FIFA Players API is running' });
});

// API endpoint to get all players
app.get('/api/players', async (req, res) => {
  try {
    const playersFilePath = path.join(__dirname, 'data', 'fifaPlayers.json');
    const fileData = await fs.promises.readFile(playersFilePath, 'utf8');
    const playersData = JSON.parse(fileData);
    res.json(playersData.players);
  } catch (error) {
    console.error('Error reading players data:', error);
    res.status(500).json({ error: 'Failed to load players data', details: error.message });
  }
});

// API endpoint to get a specific player by name
app.get('/api/players/:name', async (req, res) => {
  try {
    const playerName = req.params.name;
    const playersFilePath = path.join(__dirname, 'data', 'fifaPlayers.json');
    const fileData = await fs.promises.readFile(playersFilePath, 'utf8');
    const playersData = JSON.parse(fileData);
    
    const player = playersData.players.find(
      p => p.NAME && p.NAME.toLowerCase() === playerName.toLowerCase()
    );
    
    if (player) {
      res.json(player);
    } else {
      res.status(404).json({ error: 'Player not found' });
    }
  } catch (error) {
    console.error('Error finding player:', error);
    res.status(500).json({ error: 'Failed to retrieve player data', details: error.message });
  }
});

// API endpoint to search players
app.get('/api/search', async (req, res) => {
  try {
    const { name, position, minRating, maxRating, limit = 20 } = req.query;
    const playersFilePath = path.join(__dirname, 'data', 'fifaPlayers.json');
    const fileData = await fs.promises.readFile(playersFilePath, 'utf8');
    const playersData = JSON.parse(fileData);
    
    let filteredPlayers = playersData.players;
    
    if (name) {
      filteredPlayers = filteredPlayers.filter(
        p => p.NAME && p.NAME.toLowerCase().includes(name.toLowerCase())
      );
    }
    
    if (position) {
      filteredPlayers = filteredPlayers.filter(
        p => p.POSITION && p.POSITION.includes(position)
      );
    }
    
    if (minRating) {
      filteredPlayers = filteredPlayers.filter(
        p => p.RATING && parseInt(p.RATING) >= parseInt(minRating)
      );
    }
    
    if (maxRating) {
      filteredPlayers = filteredPlayers.filter(
        p => p.RATING && parseInt(p.RATING) <= parseInt(maxRating)
      );
    }
    
    const limitedResults = filteredPlayers.slice(0, parseInt(limit));
    res.json(limitedResults);
  } catch (error) {
    console.error('Error searching players:', error);
    res.status(500).json({ error: 'Failed to search players', details: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start the server in development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`FIFA Players API server running on http://localhost:${PORT}`);
  });
}

// Export the Express API
module.exports = app; 