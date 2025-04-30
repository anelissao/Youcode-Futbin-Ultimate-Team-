# Futbin Ultimate Team

This project is a web application that allows users to explore and manage a virtual football team using player data scraped from the Futbin website. The application is still in progress and aims to provide a comprehensive platform for football enthusiasts to interact with player statistics and build their ultimate team.

## Features

- **Player Data**: Player statistics and information are scraped from the Futbin website.
- **Player Images**: Due to limitations in scraping images from Futbin, player images are sourced from Wikipedia.
- **Interactive UI**: Users can search, filter, and sort players to customize their team.
- **Team Management**: Add players to your team and manage your lineup.
- **API Integration**: The application fetches player data from a public API to ensure up-to-date information.

## Scraping Details

The player data, including statistics and other relevant information, is scraped from the Futbin website. However, due to restrictions on image scraping, player images are sourced from Wikipedia to ensure a complete visual representation. This approach allows the application to provide a rich dataset for users to interact with while maintaining visual appeal.

## Project Structure

- **Frontend**: The user interface is built with HTML, CSS, and JavaScript.
  - `index.html`: Main entry point for the web application.
  - `market.js`: Handles the logic for displaying and managing players.
  - `style.css`: Contains styles for the application.
- **Backend**: A simple server setup to serve the application.
  - `server.js`: Node.js server to run the application locally.
- **Configuration**:
  - `package.json`: Contains project dependencies and scripts.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/Youcode-Futbin-Ultimate-Team.git
   cd Youcode-Futbin-Ultimate-Team
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the server**:
   ```bash
   node server.js
   ```

4. **Open the application**:
   - Visit `http://localhost:3000` in your web browser.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgments

- **Futbin**: For providing the player data.
- **Wikipedia**: For the player images. 
