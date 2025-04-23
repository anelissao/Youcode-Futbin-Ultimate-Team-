// Market page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Global variables
    let allPlayers = [];
    let filteredPlayers = [];
    let currentPage = 1;
    const playersPerPage = 16;
    
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
            playerCard.querySelector('.club-image').src = player.CLUB_IMAGE;
            playerCard.querySelector('.player-image').src = player.IMAGE;
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
        // Get current team from localStorage
        let myTeam = JSON.parse(localStorage.getItem('myTeam')) || [];
        
        // Check if player is already in team
        const isPlayerInTeam = myTeam.some(p => p.NAME === player.NAME);
        
        if (isPlayerInTeam) {
            showNotification(`${player.NAME} is already in your team!`, 'warning');
            return;
        }
        
        // Add player to team
        myTeam.push(player);
        
        // Save updated team to localStorage
        localStorage.setItem('myTeam', JSON.stringify(myTeam));
        
        // Show success notification
        showNotification(`${player.NAME} added to your team!`, 'success');
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