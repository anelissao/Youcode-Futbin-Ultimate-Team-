const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());

// Serve static files from the root directory
app.use(express.static('./'));

// API endpoint to get all players
app.get('/api/players', (req, res) => {
  try {
    // Read the fifaPlayers.json file
    const playersFilePath = path.join(__dirname, 'assets', 'data', 'fifaPlayers.json');
    const fileData = fs.readFileSync(playersFilePath, 'utf8');
    const playersData = JSON.parse(fileData);
    
    // Send the players array from the JSON file
    res.json(playersData.players);
  } catch (error) {
    console.error('Error reading players data:', error);
    res.status(500).json({ error: 'Failed to load players data' });
  }
});

// API endpoint to get a specific player by name
app.get('/api/players/:name', (req, res) => {
  try {
    const playerName = req.params.name;
    const playersFilePath = path.join(__dirname, 'assets', 'data', 'fifaPlayers.json');
    const fileData = fs.readFileSync(playersFilePath, 'utf8');
    const playersData = JSON.parse(fileData);
    
    // Find the player by name (case insensitive)
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
    res.status(500).json({ error: 'Failed to retrieve player data' });
  }
});

// API endpoint to search players
app.get('/api/search', (req, res) => {
  try {
    const { name, position, minRating, maxRating, limit = 20 } = req.query;
    const playersFilePath = path.join(__dirname, 'assets', 'data', 'fifaPlayers.json');
    const fileData = fs.readFileSync(playersFilePath, 'utf8');
    const playersData = JSON.parse(fileData);
    
    let filteredPlayers = playersData.players;
    
    // Filter by name if provided
    if (name) {
      filteredPlayers = filteredPlayers.filter(
        p => p.NAME && p.NAME.toLowerCase().includes(name.toLowerCase())
      );
    }
    
    // Filter by position if provided
    if (position) {
      filteredPlayers = filteredPlayers.filter(
        p => p.POSITION && p.POSITION.includes(position)
      );
    }
    
    // Filter by rating range if provided
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
    
    // Limit results
    const limitedResults = filteredPlayers.slice(0, parseInt(limit));
    
    res.json(limitedResults);
  } catch (error) {
    console.error('Error searching players:', error);
    res.status(500).json({ error: 'Failed to search players' });
  }
});

// Start the server
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`FIFA Players API server running on http://localhost:${PORT}`);
  });
}

module.exports = app; 