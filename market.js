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
            resultsGrid.innerHTML = '<div class="loading">Loading players...</div>';
            
            const response = await fetch('https://fifa-api-new.vercel.app/api/players');
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
    
    // Display players with pagination
    function displayPlayers() {
        resultsGrid.innerHTML = '';
        
        const startIndex = (currentPage - 1) * playersPerPage;
        const endIndex = Math.min(startIndex + playersPerPage, filteredPlayers.length);
        
        if (filteredPlayers.length === 0) {
            resultsGrid.innerHTML = '<div class="no-results">No players found matching your criteria.</div>';
            return;
        }
        
        // Get the template
        const template = document.getElementById('player-card-template');
        
        for (let i = startIndex; i < endIndex; i++) {
            const player = filteredPlayers[i];
            
            // Clone the template
            const playerCard = template.content.cloneNode(true);
            
            // Set player data
            playerCard.querySelector('.card-rating').textContent = player.RATING;
            playerCard.querySelector('.card-position').textContent = player.POSITION;
            
            // Handle club image
            const clubImageElement = playerCard.querySelector('.card-club');
            if (!player.CLUB_IMAGE || player.CLUB_IMAGE === "No club image found") {
                clubImageElement.src = DEFAULT_CLUB_IMAGE;
                clubImageElement.alt = 'Default Club';
                clubImageElement.title = 'Club Image Not Available';
                clubImageElement.classList.add('default-club-image');
            } else {
                clubImageElement.src = player.CLUB_IMAGE;
                clubImageElement.alt = 'Club Image';
                
                // Handle club image loading errors
                clubImageElement.onerror = function() {
                    this.onerror = null;
                    this.src = DEFAULT_CLUB_IMAGE;
                    this.classList.add('default-club-image');
                    this.title = 'Club Image Unavailable';
                };
            }
            
            // Handle player image
            const playerImageElement = playerCard.querySelector('.player-image');
            if (!player.IMAGE || player.IMAGE === "No image found") {
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
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
    }
    
    // Add player to team
    function addPlayerToTeam(player) {
        try {
            let myTeam = JSON.parse(localStorage.getItem('myTeam')) || [];
            
            // Check if player is already in team
            if (myTeam.some(p => p.NAME === player.NAME)) {
                showNotification(`${player.NAME} is already in your team!`, 'warning');
                return;
            }
            
            // Add timestamp for sorting
            player.ADDED_AT = Date.now();
            
            myTeam.push(player);
            localStorage.setItem('myTeam', JSON.stringify(myTeam));
            
            showNotification(`${player.NAME} added to your team!`, 'success');
        } catch (error) {
            showNotification('Error adding player to team', 'error');
            console.error('Error adding player to team:', error);
        }
    }
    
    // Show notification
    function showNotification(message, type = 'info') {
        notification.textContent = message;
        notification.className = `notification ${type}`;
        notification.classList.remove('hidden');
        
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 3000);
    }
    
    // Event Listeners
    searchBtn.addEventListener('click', filterPlayers);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            filterPlayers();
        }
    });
    
    applyFiltersBtn.addEventListener('click', filterPlayers);
    
    resetFiltersBtn.addEventListener('click', () => {
        searchInput.value = '';
        positionFilter.value = '';
        minRatingFilter.value = '70';
        maxRatingFilter.value = '99';
        sortSelect.value = 'rating-desc';
        
        filteredPlayers = [...allPlayers];
        currentPage = 1;
        sortPlayers('rating-desc');
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