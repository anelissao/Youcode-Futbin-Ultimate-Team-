// Market page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Global variables
    let allPlayers = [];
    let filteredPlayers = [];
    let currentPage = 1;
    const playersPerPage = 16;
    
    // Fallback images
    const DEFAULT_PLAYER_IMAGE = 'https://cdn-icons-png.flaticon.com/512/166/166344.png';
    const DEFAULT_CLUB_IMAGE = 'https://cdn-icons-png.flaticon.com/512/869/869046.png';
    const MISSING_CLUB_IMAGE = 'https://cdn-icons-png.flaticon.com/512/882/882988.png';
    
    // DOM elements
    const resultsGrid = document.getElementById('results-grid');
    const searchInput = document.getElementById('player-search');
    const searchBtn = document.getElementById('search-btn');
    const positionFilter = document.getElementById('position-filter');
    const minRatingFilter = document.getElementById('min-rating');
    const maxRatingFilter = document.getElementById('max-rating');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const sortSelect = document.getElementById('sort-by');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');
    const notification = document.getElementById('notification');
    
    // Load players from API
    async function loadPlayers() {
        try {
            const response = await fetch('http://localhost:3000/players');
            if (!response.ok) {
                throw new Error('Failed to fetch players');
            }
            
            allPlayers = await response.json();
            console.log('First few players:', allPlayers.slice(0, 5));
            filteredPlayers = [...allPlayers];
            
            // Initial sort by rating (high to low)
            sortPlayers('rating-desc');
            
            updatePagination();
            displayPlayers();
        } catch (error) {
            showNotification('Error loading players: ' + error.message, 'error');
            resultsGrid.innerHTML = '<div class="error">Failed to load players. Please try again later.</div>';
        }
    }
    
    // Display players on the current page
    function displayPlayers() {
        // Clear current results
        resultsGrid.innerHTML = '';
        
        // Calculate start and end indices for current page
        const startIndex = (currentPage - 1) * playersPerPage;
        const endIndex = Math.min(startIndex + playersPerPage, filteredPlayers.length);
        
        // Check if no results
        if (filteredPlayers.length === 0) {
            resultsGrid.innerHTML = '<div class="no-results">No players found matching your criteria</div>';
            return;
        }
        
        // Get template
        const template = document.getElementById('player-card-template');
        
        // Display players for current page
        for (let i = startIndex; i < endIndex; i++) {
            const player = filteredPlayers[i];
            
            // Clone template
            const playerCard = template.content.cloneNode(true);
            
            // Set player data
            playerCard.querySelector('.card-rating').textContent = player.RATING;
            playerCard.querySelector('.card-position').textContent = player.POSITION;
            
            // Set club image
            const clubImageElement = playerCard.querySelector('.club-image');
            const clubImageValue = player.CLUB_IMAGE;
            
            if (clubImageValue === "No image found") {
                // This player is retired/has no club - use the retired icon
                clubImageElement.src = DEFAULT_CLUB_IMAGE;
                clubImageElement.alt = 'Free Agent';
                clubImageElement.title = '⚠️ FREE AGENT / RETIRED ⚠️\nThis player does not have a club';
                clubImageElement.classList.add('default-club-image');
                
                // Add a badge to make it visually clear
                const badge = document.createElement('span');
                badge.className = 'retired-badge';
                badge.textContent = 'FREE AGENT';
                badge.title = 'This player is retired or a free agent';
                playerCard.querySelector('.player-market-card').appendChild(badge);
                
                console.log(`Player ${player.NAME} is using retired icon`);
            } else {
                // Normal club image
                clubImageElement.src = clubImageValue;
                clubImageElement.alt = player.CLUB || 'Club';
                
                // Handle image loading errors
                clubImageElement.onerror = function() {
                    this.onerror = null; // Prevent infinite loops
                    // If image fails to load but wasn't "No image found"
                    this.src = MISSING_CLUB_IMAGE;
                    this.classList.add('missing-club-image');
                    this.title = 'Club Image Unavailable';
                };
            }
            
            // Set player image
            const playerImageElement = playerCard.querySelector('.player-image');
            if (player.IMAGE === "No image found") {
                playerImageElement.src = DEFAULT_PLAYER_IMAGE;
                playerImageElement.alt = player.NAME + ' (No Image)';
                playerImageElement.title = 'No Image Available';
                playerImageElement.classList.add('default-player-image');
            } else {
                playerImageElement.src = player.IMAGE;
                playerImageElement.alt = player.NAME;
                
                // Handle image loading errors
                playerImageElement.onerror = function() {
                    this.onerror = null;
                    this.src = DEFAULT_PLAYER_IMAGE;
                    this.classList.add('default-player-image');
                    this.title = 'Player Image Unavailable';
                };
            }
            
            playerCard.querySelector('.player-name').textContent = player.NAME;
            playerCard.querySelector('.pace-val').textContent = player.PACE;
            playerCard.querySelector('.shooting-val').textContent = player.SHOOTING;
            playerCard.querySelector('.passing-val').textContent = player.PASSING;
            playerCard.querySelector('.dribbling-val').textContent = player.DRIBBLING;
            playerCard.querySelector('.defending-val').textContent = player.DEFENDING;
            playerCard.querySelector('.physical-val').textContent = player.PHYSICAL;
            
            // Add event listener to 'Add to Team' button
            const addBtn = playerCard.querySelector('.add-to-team-btn');
            addBtn.addEventListener('click', () => addPlayerToTeam(player));
            
            // Add player card to grid
            resultsGrid.appendChild(playerCard);
        }
    }
    
    // Filter players based on search and filters
    function filterPlayers() {
        const searchTerm = searchInput.value.toLowerCase();
        const position = positionFilter.value;
        const minRating = parseInt(minRatingFilter.value) || 0;
        const maxRating = parseInt(maxRatingFilter.value) || 99;
        
        filteredPlayers = allPlayers.filter(player => {
            // Check name search
            const nameMatch = player.NAME.toLowerCase().includes(searchTerm);
            
            // Check position filter
            const positionMatch = position === '' || player.POSITION.includes(position);
            
            // Check rating range
            const rating = parseInt(player.RATING);
            const ratingMatch = rating >= minRating && rating <= maxRating;
            
            return nameMatch && positionMatch && ratingMatch;
        });
        
        // Reset to first page and update display
        currentPage = 1;
        updatePagination();
        
        // Sort players with current sort option
        const sortOption = sortSelect.value;
        sortPlayers(sortOption);
    }
    
    // Sort players based on selected option
    function sortPlayers(sortOption) {
        switch (sortOption) {
            case 'rating-desc':
                filteredPlayers.sort((a, b) => parseInt(b.RATING) - parseInt(a.RATING));
                break;
            case 'rating-asc':
                filteredPlayers.sort((a, b) => parseInt(a.RATING) - parseInt(b.RATING));
                break;
            case 'name-asc':
                filteredPlayers.sort((a, b) => a.NAME.localeCompare(b.NAME));
                break;
            case 'name-desc':
                filteredPlayers.sort((a, b) => b.NAME.localeCompare(a.NAME));
                break;
        }
        
        displayPlayers();
    }
    
    // Update pagination controls
    function updatePagination() {
        const totalPages = Math.ceil(filteredPlayers.length / playersPerPage);
        
        // Update page info
        pageInfo.textContent = `Page ${currentPage} of ${totalPages || 1}`;
        
        // Enable/disable prev button
        prevPageBtn.disabled = currentPage <= 1;
        
        // Enable/disable next button
        nextPageBtn.disabled = currentPage >= totalPages;
    }
    
    // Add player to user's team
    function addPlayerToTeam(player) {
        // Create a copy of the player object
        const playerToAdd = {...player};
        
        // Get current team from localStorage
        let myTeam = JSON.parse(localStorage.getItem('myTeam')) || [];
        
        // Check if player is already in team
        const isPlayerInTeam = myTeam.some(p => p.NAME === playerToAdd.NAME);
        
        if (isPlayerInTeam) {
            showNotification(`${playerToAdd.NAME} is already in your team!`, 'warning');
            return;
        }
        
        // Check if team has reached the maximum of 25 players
        if (myTeam.length >= 25) {
            showNotification(`Your bench is full! Maximum 25 players allowed. Please remove some players first.`, 'error');
            return;
        }
        
        // Handle case where player has "No image found"
        if (playerToAdd.IMAGE === "No image found") {
            playerToAdd.IMAGE = DEFAULT_PLAYER_IMAGE;
        }
        
        // Handle case where club is "No image found" (retired player)
        if (playerToAdd.CLUB_IMAGE === "No image found") {
            playerToAdd.CLUB_IMAGE = DEFAULT_CLUB_IMAGE;
            // Add a flag to identify this is a retired player
            playerToAdd.IS_RETIRED = true;
        }
        
        // Add player to team
        myTeam.push(playerToAdd);
        
        // Save updated team to localStorage
        localStorage.setItem('myTeam', JSON.stringify(myTeam));
        
        // Show success notification
        showNotification(`${playerToAdd.NAME} added to your team!`, 'success');
    }
    
    // Show notification
    function showNotification(message, type = 'info') {
        notification.textContent = message;
        notification.className = `notification ${type}`;
        
        // Show notification
        notification.classList.remove('hidden');
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 3000);
    }
    
    // Event listeners
    searchBtn.addEventListener('click', filterPlayers);
    searchInput.addEventListener('keyup', e => {
        if (e.key === 'Enter') filterPlayers();
    });
    
    applyFiltersBtn.addEventListener('click', filterPlayers);
    
    resetFiltersBtn.addEventListener('click', () => {
        // Reset form fields
        searchInput.value = '';
        positionFilter.value = '';
        minRatingFilter.value = '70';
        maxRatingFilter.value = '99';
        
        // Show all players
        filteredPlayers = [...allPlayers];
        currentPage = 1;
        
        // Re-sort and update display
        sortPlayers(sortSelect.value);
        updatePagination();
    });
    
    sortSelect.addEventListener('change', () => {
        sortPlayers(sortSelect.value);
    });
    
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
            displayPlayers();
        }
    });
    
    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredPlayers.length / playersPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
            displayPlayers();
        }
    });
    
    // Initial load
    loadPlayers();
}); 