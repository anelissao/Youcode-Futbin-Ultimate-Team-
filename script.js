const container = document.getElementById('bench'); // Assuming only one 'card' container exists
const pitch = document.getElementById("pitch");
const pitchWidth = pitch.offsetWidth;
const pitchHeight = pitch.offsetHeight;
const playerWidth = 200; // Player card width
const playerHeight = 50; // Player card height
let playersArr = []

// Define player positions (percentage values)
const positions = [
  { x: 50, y: 85 }, // Goalkeeper
  
  { x: 15, y: 60 }, // Defender 1
  { x: 37, y: 65 }, // Defender 2
  { x: 62, y: 65 }, // Defender 3
  { x: 85, y: 60 }, // Defender 4
  
  { x: 25, y: 35 }, // Midfielder 1
  { x: 53, y: 40 }, // Midfielder 2
  { x: 80, y: 35 }, // Midfielder 3
  
  { x: 25, y: 10 }, // Forward 1
  { x: 50, y: 5 }, // Forward 2
  { x: 75, y: 10 }, // Forward 3
];

// Position each player dynamically
function setPos(){
const players = document.querySelectorAll(".player");
players.forEach((player, index) => {
  const { x, y } = positions[index];
  
  // Calculate position offsets
  const leftOffset = (pitchWidth * x) / 100 - playerWidth / 2;
  const topOffset = (pitchHeight * y) / 100 - playerHeight / 2;
  
  // Apply calculated positions
  player.style.left = `${leftOffset}px`;
  player.style.top = `${topOffset}px`;
});
}
setPos()

// Add an event listener to detect which page we're on and auto-load players
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on the team management page by looking for the 'pitch' element
  const isPitchPage = document.getElementById('pitch');
  
  if (isPitchPage) {
    console.log('Team management page detected - auto-loading players');
    
    // Attach clearTeam event listener to the button
    const clearTeamBtn = document.getElementById('clear-team');
    if (clearTeamBtn) {
      console.log('Attaching event listener to Clear Team button');
      clearTeamBtn.addEventListener('click', clearTeam);
    } else {
      console.error('Clear Team button not found!');
    }
    
    // Only load players from localStorage, not from hardcoded array
    loadMarketPlayers();
  }
});

// Handle API player data for dynamic references if needed but don't add to bench directly
fetch('http://localhost:3000/players')
.then(response => response.json())
.then(players => {
    console.log('Player data loaded from API for reference');
    // Store the players data for reference but don't add them to the bench
    window.allAPIPlayers = players; // Make available globally if needed for other features
})
.catch(error => console.error('Error fetching players:', error));
  

  setTimeout(() => {
    const cards = document.querySelectorAll('.card');
    console.log(cards.length);

    for (let i = 0; i < cards.length; i++) {
        console.log(i);
        let selected = false;

        cards[i].addEventListener('click', (e) => {
            console.log(e.currentTarget.querySelector(".card-position").textContent);
            let pos = e.currentTarget.querySelector(".card-position").textContent;

            const pitchPosition = document.querySelectorAll(`.${pos}`);

            for (let j = 0; j < pitchPosition.length; j++) {
                pitchPosition[j].classList.add('selected');
            }
            for (let x = 0; x < pitchPosition.length; x++) {
                pitchPosition[x].addEventListener('click', () => {
                    if (selected) {
                        return;
                    }
                    pitchPosition[x].replaceWith(cards[i]);
                    for (let j = 0; j < pitchPosition.length; j++) {
                        pitchPosition[j].classList.remove('selected');
                    }
                    cards[i].classList.add('player');
                    playersArr.splice(i, 1);
                    setPos();
                    selected = true;
                });
            }
        });

        if (selected) {
            break;
        }
    }

    const Ebtns = document.querySelectorAll(".e-btn");
    for (let i = 0; i < Ebtns.length; i++) {
        Ebtns[i].addEventListener('click', () => {
            const form = document.getElementById("form");
            form.innerHTML = `
            <form id="playerForm">
                <label for="name">NAME:</label>
                <input type="text" id="name" name="name" required>

                <label for="club">CLUB:</label>
                <input type="text" id="club" name="club" required>

                <label for="league">LEAGUE:</label>
                <input type="text" id="league" name="league" required>

                <label for="position">POSITION:</label>
                <input type="text" id="position" name="position" required>

                <label for="tier">TIER:</label>
                <input type="text" id="tier" name="tier" required>

                <label for="rating">RATING:</label>
                <input type="number" id="rating" name="rating" required>

                <label for="pace">PACE:</label>
                <input type="number" id="pace" name="pace" required>

                <label for="shooting">SHOOTING:</label>
                <input type="number" id="shooting" name="shooting" required>

                <label for="passing">PASSING:</label>
                <input type="number" id="passing" name="passing" required>

                <label for="dribbling">DRIBBLING:</label>
                <input type="number" id="dribbling" name="dribbling" required>

                <label for="defending">DEFENDING:</label>
                <input type="number" id="defending" name="defending" required>

                <label for="physical">PHYSICAL:</label>
                <input type="number" id="physical" name="physical" required>

                <label for="image">IMAGE (URL):</label>
                <input type="url" id="image" name="image" required>

                <label for="clubImage">CLUB_IMAGE (URL):</label>
                <input type="url" id="clubImage" name="clubImage" required>

                <button type="submit" id="submitBtn">Submit</button>
            </form>
            `;

            const playerForm = document.getElementById('playerForm');
            playerForm.addEventListener('submit', (event) => {
                event.preventDefault();

                const formData = {
                    NAME: playerForm.name.value,
                    CLUB: playerForm.club.value,
                    LEAGUE: playerForm.league.value,
                    POSITION: playerForm.position.value,
                    TIER: playerForm.tier.value,
                    RATING: playerForm.rating.value,
                    PACE: playerForm.pace.value,
                    SHOOTING: playerForm.shooting.value,
                    PASSING: playerForm.passing.value,
                    DRIBBLING: playerForm.dribbling.value,
                    DEFENDING: playerForm.defending.value,
                    PHYSICAL: playerForm.physical.value,
                    IMAGE: playerForm.image.value,
                    CLUB_IMAGE: playerForm.clubImage.value,
                };

                const playerHTML = `
                <div class="player-node">
                    <div class="relative flex items-center justify-center">
                        <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
                            <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                                <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                                    <div class="text-[0.9rem] mt-2">${formData.RATING}</div>
                                    <div class="text-[0.8rem]">${formData.POSITION}</div>
                                    <div class="block my-[0.2rem_0]">
                                        <img src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg" alt="Flag" class="w-[0.8rem] h-[12px] object-contain" />
                                    </div>
                                    <div class="block">
                                        <img src="${formData.CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain" />
                                    </div>
                                </div>
                                <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                                    <img src="${formData.IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                                    <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                                        <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                                        <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                                    </div>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="text-[#e9cc74] w-[80%] mx-auto">
                                    <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                                        <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${formData.NAME}</span>
                                    </div>
                                    <div class="flex justify-center mt-[0.2rem]">
                                        <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                                            <div class="flex items-center text-[0.7rem] uppercase">
                                                <span class="font-bold mr-[0.2rem]">${formData.PACE}</span>
                                                <span class="font-light">PAC</span>
                                            </div>
                                            <div class="flex items-center text-[0.7rem] uppercase">
                                                <span class="font-bold mr-[0.2rem]">${formData.SHOOTING}</span>
                                                <span class="font-light">SHO</span>
                                            </div>
                                            <div class="flex items-center text-[0.7rem] uppercase">
                                                <span class="font-bold mr-[0.2rem]">${formData.PASSING}</span>
                                                <span class="font-light">PAS</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="flex items-center text-[0.7rem] uppercase">
                                                <span class="font-bold mr-[0.2rem]">${formData.DRIBBLING}</span>
                                                <span class="font-light">DRI</span>
                                            </div>
                                            <div class="flex items-center text-[0.7rem] uppercase">
                                                <span class="font-bold mr-[0.2rem]">${formData.DEFENDING}</span>
                                                <span class="font-light">DEF</span>
                                            </div>
                                            <div class="flex items-center text-[0.7rem] uppercase">
                                                <span class="font-bold mr-[0.2rem]">${formData.PHYSICAL}</span>
                                                <span class="font-light">PHY</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btns">
                        <button class="e-btn">Edit</button>
                        <button class="d-btn">Delete</button>
                    </div>
                </div>
                `;
                console.log(playerHTML);
                playersArr.splice(i, 1)
                container.innerHTML += playerHTML
            });
        });
    }
}, 4000);

// Notification system
function showNotification(message, type = 'error') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.add('visible');
  }, 10);
  
  // Auto remove after delay
  setTimeout(() => {
    notification.classList.remove('visible');
    setTimeout(() => {
      notification.remove();
    }, 500); // Wait for fade out animation
  }, 3000);
}

// Drag and Drop functionality
setTimeout(() => {
  // Function to make an element draggable
  function makeDraggable(element) {
    element.setAttribute('draggable', 'true');
    
    element.addEventListener('dragstart', function(e) {
      e.dataTransfer.setData('text/plain', element.outerHTML);
      // Store the player position for position validation
      const position = element.querySelector('.card-position')?.textContent || '';
      e.dataTransfer.setData('position', position);
      // Store the position globally to access during dragover
      window.currentDraggedPosition = position;
      e.dataTransfer.effectAllowed = 'move';
      
      // Remove old instance if it's being moved from the pitch
      if (element.closest('#pitch')) {
        // Mark this element for removal on successful drop
        element.setAttribute('data-being-moved', 'true');
      }
    });
    
    // Clear the global variable when drag ends
    element.addEventListener('dragend', function() {
      window.currentDraggedPosition = null;
    });
  }
  
  // Get all player elements from bench
  const benchPlayers = document.querySelectorAll('#bench .player-node');
  const emptyPositions = document.querySelectorAll('#pitch .player.empty');
  
  // Make bench players draggable
  benchPlayers.forEach(player => {
    makeDraggable(player);
  });
  
  // Setup drop targets on the pitch
  emptyPositions.forEach(position => {
    // Get valid positions for this drop target
    const validPositions = position.className
      .split(' ')
      .filter(cls => cls !== 'player' && cls !== 'empty');
    
    // Allow drop by preventing default behavior
    position.addEventListener('dragover', function(e) {
      // Use the globally stored position instead of trying to get it from dataTransfer
      const draggedPosition = window.currentDraggedPosition || '';
      
      // Check if the dragged player's position matches any valid position for this slot
      const isValidPosition = validPositions.some(validPos => 
        draggedPosition.includes(validPos) || 
        validPos.includes(draggedPosition)
      );
      
      // Only allow drop if position matches
      if (isValidPosition) {
        e.preventDefault();
        position.classList.add('drag-over');
      } else {
        position.classList.add('invalid-position');
        
        // Show tooltip or indicator for incompatible position
        const validPositionsText = validPositions.join('/');
        
        // Create or update position tooltip
        let tooltip = document.getElementById('position-tooltip');
        if (!tooltip) {
          tooltip = document.createElement('div');
          tooltip.id = 'position-tooltip';
          tooltip.className = 'position-tooltip';
          document.body.appendChild(tooltip);
        }
        
        tooltip.innerHTML = `<strong>Wrong Position!</strong><br>${draggedPosition} players can't play in ${validPositionsText} position`;
        tooltip.style.display = 'block';
        tooltip.style.left = (e.clientX + 10) + 'px';
        tooltip.style.top = (e.clientY + 10) + 'px';
      }
    });
    
    // Visual feedback when dragging over
    position.addEventListener('dragenter', function(e) {
      const draggedPosition = window.currentDraggedPosition || '';
      const isValidPosition = validPositions.some(validPos => 
        draggedPosition.includes(validPos) || 
        validPos.includes(draggedPosition)
      );
      
      if (isValidPosition) {
        e.preventDefault();
        position.classList.add('drag-over');
      } else {
        position.classList.add('invalid-position');
      }
    });
    
    // Remove visual feedback when leaving
    position.addEventListener('dragleave', function() {
      position.classList.remove('drag-over');
      position.classList.remove('invalid-position');
      
      // Hide position tooltip
      const tooltip = document.getElementById('position-tooltip');
      if (tooltip) {
        tooltip.style.display = 'none';
      }
    });
    
    // Handle the drop event
    position.addEventListener('drop', function(e) {
      e.preventDefault();
      position.classList.remove('drag-over');
      position.classList.remove('invalid-position');
      
      // Hide position tooltip
      const tooltip = document.getElementById('position-tooltip');
      if (tooltip) {
        tooltip.style.display = 'none';
      }
      
      // Get the dragged player data and position
      const playerData = e.dataTransfer.getData('text/plain');
      const draggedPosition = window.currentDraggedPosition || e.dataTransfer.getData('position');
      
      // Check if the position is valid
      const isValidPosition = validPositions.some(validPos => 
        draggedPosition.includes(validPos) || 
        validPos.includes(draggedPosition)
      );
      
      if (!isValidPosition) {
        console.log(`Invalid position! ${draggedPosition} cannot be placed in ${validPositions.join(', ')}`);
        showNotification(`Invalid position! ${draggedPosition} players cannot play in the ${validPositions.join('/')} position.`, 'error');
        return;
      }
      
      // Remove previously placed player element marked for removal
      document.querySelectorAll('[data-being-moved="true"]').forEach(el => {
        // If the element is inside a position container
        if (el.closest('#pitch .player')) {
          // Reset the position to original state
          const posContainer = el.closest('#pitch .player');
          posContainer.innerHTML = posContainer.getAttribute('data-position').includes('0') ? 'Goalkeeper' : 
                           posContainer.getAttribute('data-position').includes('1') ? 'Defender 1' : 
                           posContainer.getAttribute('data-position').includes('2') ? 'Defender 2' : 
                           posContainer.getAttribute('data-position').includes('3') ? 'Defender 3' :
                           posContainer.getAttribute('data-position').includes('4') ? 'Defender 4' : 
                           posContainer.getAttribute('data-position').includes('5') ? 'Midfielder 1' :
                           posContainer.getAttribute('data-position').includes('6') ? 'Midfielder 2' :
                           posContainer.getAttribute('data-position').includes('7') ? 'Midfielder 3' :
                           posContainer.getAttribute('data-position').includes('8') ? 'Forward 1' : 
                           posContainer.getAttribute('data-position').includes('9') ? 'Forward 2' : 'Forward 3';
          posContainer.classList.add('empty');
        } else {
          el.remove();
        }
      });
      
      // Clear the "empty" class and replace content
      position.classList.remove('empty');
      
      // Save original position classes to maintain styling
      const positionClasses = position.className;
      
      // Replace the empty position with the player card
      position.innerHTML = playerData;
      
      // Make the dropped player draggable again so it can be moved
      const droppedPlayer = position.querySelector('.player-node');
      if (droppedPlayer) {
        makeDraggable(droppedPlayer);
        
        // Add a button to remove player from position
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function(e) {
          e.stopPropagation(); // Prevent drag event from starting
          
          // Reset the position to empty
          position.innerHTML = position.getAttribute('data-position').includes('0') ? 'Goalkeeper' : 
                               position.getAttribute('data-position').includes('1') ? 'Defender 1' : 
                               position.getAttribute('data-position').includes('2') ? 'Defender 2' : 
                               position.getAttribute('data-position').includes('3') ? 'Defender 3' :
                               position.getAttribute('data-position').includes('4') ? 'Defender 4' : 
                               position.getAttribute('data-position').includes('5') ? 'Midfielder 1' :
                               position.getAttribute('data-position').includes('6') ? 'Midfielder 2' :
                               position.getAttribute('data-position').includes('7') ? 'Midfielder 3' :
                               position.getAttribute('data-position').includes('8') ? 'Forward 1' : 
                               position.getAttribute('data-position').includes('9') ? 'Forward 2' : 'Forward 3';
          position.className = positionClasses + ' empty';
          
          // Show notification
          showNotification('Player removed from position', 'success');
        });
        droppedPlayer.appendChild(removeBtn);
        
        // Show success notification
        showNotification(`Player successfully placed in ${validPositions[0]} position!`, 'success');
      }
      
      console.log(`Player placed at position ${position.getAttribute('data-position')}`);
    });
  });
  
  // Event delegation for new draggable elements
  document.addEventListener('dragend', function(e) {
    // Clean up any leftover elements marked for moving
    document.querySelectorAll('[data-being-moved="true"]').forEach(el => {
      el.removeAttribute('data-being-moved');
    });
    
    // Clean up any lingering visual feedback
    document.querySelectorAll('.drag-over, .invalid-position').forEach(el => {
      el.classList.remove('drag-over');
      el.classList.remove('invalid-position');
    });
    
    // Hide position tooltip
    const tooltip = document.getElementById('position-tooltip');
    if (tooltip) {
      tooltip.style.display = 'none';
    }
  });
}, 5000); // Use timeout to ensure elements are loaded

// Update CSS for drag-and-drop visual feedback
const style = document.createElement('style');
style.textContent = `
  .drag-over {
    border: 2px dashed gold !important;
    background-color: rgba(255, 215, 0, 0.3) !important;
  }
  
  .invalid-position {
    border: 2px dashed red !important;
    background-color: rgba(255, 0, 0, 0.1) !important;
  }
  
  .position-tooltip {
    position: fixed;
    background-color: #ff4444;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    z-index: 1000;
    pointer-events: none;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    display: none;
    max-width: 250px;
    text-align: center;
    border: 2px solid #cc0000;
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(255, 68, 68, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(255, 68, 68, 0); }
    100% { box-shadow: 0 0 0 0 rgba(255, 68, 68, 0); }
  }
  
  .remove-btn {
    background-color: #ff4444;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 2px 5px;
    font-size: 10px;
    cursor: pointer;
    position: absolute;
    bottom: 5px;
    right: 5px;
    z-index: 10;
  }
  
  .remove-btn:hover {
    background-color: #cc0000;
  }
  
  /* Notification styles */
  .notification {
    position: fixed;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 20px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    z-index: 1000;
    opacity: 0;
    transition: all 0.5s ease;
  }
  
  .notification.visible {
    top: 20px;
    opacity: 1;
  }
  
  .notification.error {
    background-color: #ff4444;
  }
  
  .notification.success {
    background-color: #4CAF50;
  }
  
  .notification.warning {
    background-color: #ff9800;
  }
`;
document.head.appendChild(style);

// Function to show notifications
function showNotification(message, type = 'info') {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.className = `notification ${type}`;
  
  // Show notification
  notification.classList.remove('hidden');
  
  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.classList.add('hidden');
  }, 3000);
}

// Load team players from localStorage
function loadMarketPlayers() {
  const myTeam = JSON.parse(localStorage.getItem('myTeam')) || [];
  
  if (myTeam.length === 0) {
    showNotification('No players found in your team. Visit the Market to add players!', 'warning');
    return;
  }
  
  // Check if we exceed the maximum player count
  if (myTeam.length > 25) {
    showNotification(`You have ${myTeam.length} players, but only 25 are allowed. Please remove some players.`, 'warning');
    // We'll still load the first 25 players
  }
  
  // Clear current bench
  container.innerHTML = '';
  playersArr = [];
  
  // Create a Set to track player names and prevent duplicates
  const playerNamesAdded = new Set();
  
  // Generate player HTML and add to bench (limit to 25 players)
  let addedCount = 0;
  
  myTeam.forEach(player => {
    // Skip if we've already added 25 players
    if (addedCount >= 25) {
      return;
    }
    
    // Skip duplicates by checking player name
    if (playerNamesAdded.has(player.NAME)) {
      console.log(`Skipping duplicate player: ${player.NAME}`);
      return;
    }
    
    // Add player name to the Set so we don't add duplicates
    playerNamesAdded.add(player.NAME);
    
    const playerHTML = `
    <div class="player-node" data-player-id="${player.NAME}">
      <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
          <div class="relative flex text-[#e9cc74] px-[0.6rem]">
              <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                  <div class="text-[0.9rem] mt-2 card-rating">${player.RATING}</div>
                  <div class="text-[0.8rem] card-position">${player.POSITION}</div>
                  <div class="block my-[0.2rem_0]">
                      <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                  </div>
                  <div class="block">
                      <img src="${player.CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                  </div>
              </div>
              <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                  <img src="${player.IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                  <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                      <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                      <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                  </div>
              </div>
          </div>
          <div class="relative">
              <div class="text-[#e9cc74] w-[80%] mx-auto">
                  <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                      <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight player-name">${player.NAME}</span>
                  </div>
                  <div class="flex justify-center mt-[0.2rem]">
                      <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                          <div class="flex items-center text-[0.7rem] uppercase">
                              <span class="font-bold mr-[0.2rem]">${player.PACE}</span>
                              <span class="font-light">PAC</span>
                          </div>
                          <div class="flex items-center text-[0.7rem] uppercase">
                              <span class="font-bold mr-[0.2rem]">${player.SHOOTING}</span>
                              <span class="font-light">SHO</span>
                          </div>
                          <div class="flex items-center text-[0.7rem] uppercase">
                              <span class="font-bold mr-[0.2rem]">${player.PASSING}</span>
                              <span class="font-light">PAS</span>
                          </div>
                      </div>
                      <div>
                          <div class="flex items-center text-[0.7rem] uppercase">
                              <span class="font-bold mr-[0.2rem]">${player.DRIBBLING}</span>
                              <span class="font-light">DRI</span>
                          </div>
                          <div class="flex items-center text-[0.7rem] uppercase">
                              <span class="font-bold mr-[0.2rem]">${player.DEFENDING}</span>
                              <span class="font-light">DEF</span>
                          </div>
                          <div class="flex items-center text-[0.7rem] uppercase">
                              <span class="font-bold mr-[0.2rem]">${player.PHYSICAL}</span>
                              <span class="font-light">PHY</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="btns">
          <button class="e-btn">Edit</button>
          <button class="d-btn">Delete</button>
      </div>
    </div>
    `;
    
    playersArr.push(playerHTML);
    container.innerHTML += playerHTML;
  });
  
  showNotification(`Loaded ${myTeam.length} players from your Market team!`, 'success');
  
  // Re-initialize draggable functionality
  initializeDragAndDrop();
}

// Clear team function
function clearTeam() {
  if (confirm('Are you sure you want to clear all players from your team?')) {
    // Reset all positions on the pitch
    document.querySelectorAll('#pitch .player').forEach(position => {
      if (!position.classList.contains('empty')) {
        const positionIndex = position.getAttribute('data-position');
        position.innerHTML = positionIndex == 0 ? 'Goalkeeper' : 
                          positionIndex == 1 ? 'Defender 1' : 
                          positionIndex == 2 ? 'Defender 2' : 
                          positionIndex == 3 ? 'Defender 3' :
                          positionIndex == 4 ? 'Defender 4' : 
                          positionIndex == 5 ? 'Midfielder 1' :
                          positionIndex == 6 ? 'Midfielder 2' :
                          positionIndex == 7 ? 'Midfielder 3' :
                          positionIndex == 8 ? 'Forward 1' : 
                          positionIndex == 9 ? 'Forward 2' : 'Forward 3';
        position.classList.add('empty');
      }
    });
    
    // Clear the bench
    container.innerHTML = '';
    playersArr = [];
    
    // Clear localStorage team data
    localStorage.removeItem('myTeam');
    
    showNotification('Team cleared successfully! All players have been removed.', 'success');
  }
}

// Initialize drag and drop functionality
function initializeDragAndDrop() {
  console.log('Initializing drag and drop functionality');
  // Get all player elements from bench
  const benchPlayers = document.querySelectorAll('#bench .player-node');
  const emptyPositions = document.querySelectorAll('#pitch .player.empty');
  
  // Make bench players draggable and set up delete buttons
  benchPlayers.forEach(player => {
    makeDraggable(player);
    
    // Set up delete button for this player
    const deleteBtn = player.querySelector('.d-btn');
    if (deleteBtn) {
      const playerName = player.querySelector('.player-name')?.textContent;
      
      deleteBtn.addEventListener('click', () => {
        if (confirm(`Are you sure you want to remove ${playerName} from your team?`)) {
          // Remove from localStorage
          removePlayerFromLocalStorage(playerName);
          
          // Remove from UI
          player.remove();
          
          showNotification(`${playerName} has been removed from your team`, 'success');
        }
      });
    }
  });
  
  // Setup drop targets on the pitch
  emptyPositions.forEach(position => {
    // Get valid positions for this drop target
    const validPositions = position.className
      .split(' ')
      .filter(cls => cls !== 'player' && cls !== 'empty');
    
    // Allow drop by preventing default behavior
    position.addEventListener('dragover', function(e) {
      // Use the globally stored position instead of trying to get it from dataTransfer
      const draggedPosition = window.currentDraggedPosition || '';
      
      // Check if the dragged player's position matches any valid position for this slot
      const isValidPosition = validPositions.some(validPos => 
        draggedPosition.includes(validPos) || 
        validPos.includes(draggedPosition)
      );
      
      // Only allow drop if position matches
      if (isValidPosition) {
        e.preventDefault();
        position.classList.add('drag-over');
      } else {
        position.classList.add('invalid-position');
        
        // Show tooltip or indicator for incompatible position
        const validPositionsText = validPositions.join('/');
        
        // Create or update position tooltip
        let tooltip = document.getElementById('position-tooltip');
        if (!tooltip) {
          tooltip = document.createElement('div');
          tooltip.id = 'position-tooltip';
          tooltip.className = 'position-tooltip';
          document.body.appendChild(tooltip);
        }
        
        tooltip.innerHTML = `<strong>Wrong Position!</strong><br>${draggedPosition} players can't play in ${validPositionsText} position`;
        tooltip.style.display = 'block';
        tooltip.style.left = (e.clientX + 10) + 'px';
        tooltip.style.top = (e.clientY + 10) + 'px';
      }
    });
    
    // Visual feedback when dragging over
    position.addEventListener('dragenter', function(e) {
      const draggedPosition = window.currentDraggedPosition || '';
      const isValidPosition = validPositions.some(validPos => 
        draggedPosition.includes(validPos) || 
        validPos.includes(draggedPosition)
      );
      
      if (isValidPosition) {
        e.preventDefault();
        position.classList.add('drag-over');
      } else {
        position.classList.add('invalid-position');
      }
    });
    
    // Remove visual feedback when leaving
    position.addEventListener('dragleave', function() {
      position.classList.remove('drag-over');
      position.classList.remove('invalid-position');
      
      // Hide position tooltip
      const tooltip = document.getElementById('position-tooltip');
      if (tooltip) {
        tooltip.style.display = 'none';
      }
    });
    
    // Handle the drop event
    position.addEventListener('drop', function(e) {
      e.preventDefault();
      position.classList.remove('drag-over');
      position.classList.remove('invalid-position');
      
      // Hide position tooltip
      const tooltip = document.getElementById('position-tooltip');
      if (tooltip) {
        tooltip.style.display = 'none';
      }
      
      // Get the dragged player data and position
      const playerData = e.dataTransfer.getData('text/plain');
      const draggedPosition = window.currentDraggedPosition || e.dataTransfer.getData('position');
      
      // Check if the position is valid
      const isValidPosition = validPositions.some(validPos => 
        draggedPosition.includes(validPos) || 
        validPos.includes(draggedPosition)
      );
      
      if (!isValidPosition) {
        showNotification(`Invalid position! ${draggedPosition} players cannot play in the ${validPositions.join('/')} position.`, 'error');
        return;
      }
      
      // Remove previously placed player element marked for removal
      document.querySelectorAll('[data-being-moved="true"]').forEach(el => {
        // If the element is inside a position container
        if (el.closest('#pitch .player')) {
          // Reset the position to original state
          const posContainer = el.closest('#pitch .player');
          posContainer.innerHTML = posContainer.getAttribute('data-position').includes('0') ? 'Goalkeeper' : 
                           posContainer.getAttribute('data-position').includes('1') ? 'Defender 1' : 
                           posContainer.getAttribute('data-position').includes('2') ? 'Defender 2' : 
                           posContainer.getAttribute('data-position').includes('3') ? 'Defender 3' :
                           posContainer.getAttribute('data-position').includes('4') ? 'Defender 4' : 
                           posContainer.getAttribute('data-position').includes('5') ? 'Midfielder 1' :
                           posContainer.getAttribute('data-position').includes('6') ? 'Midfielder 2' :
                           posContainer.getAttribute('data-position').includes('7') ? 'Midfielder 3' :
                           posContainer.getAttribute('data-position').includes('8') ? 'Forward 1' : 
                           posContainer.getAttribute('data-position').includes('9') ? 'Forward 2' : 'Forward 3';
          posContainer.classList.add('empty');
        } else {
          el.remove();
        }
      });
      
      // Clear the "empty" class and replace content
      position.classList.remove('empty');
      
      // Save original position classes to maintain styling
      const positionClasses = position.className;
      
      // Replace the empty position with the player card
      position.innerHTML = playerData;
      
      // Make the dropped player draggable again so it can be moved
      const droppedPlayer = position.querySelector('.player-node');
      if (droppedPlayer) {
        makeDraggable(droppedPlayer);
        
        // Add a button to remove player from position
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function(e) {
          e.stopPropagation(); // Prevent drag event from starting
          
          // Reset the position to empty
          position.innerHTML = position.getAttribute('data-position').includes('0') ? 'Goalkeeper' : 
                               position.getAttribute('data-position').includes('1') ? 'Defender 1' : 
                               position.getAttribute('data-position').includes('2') ? 'Defender 2' : 
                               position.getAttribute('data-position').includes('3') ? 'Defender 3' :
                               position.getAttribute('data-position').includes('4') ? 'Defender 4' : 
                               position.getAttribute('data-position').includes('5') ? 'Midfielder 1' :
                               position.getAttribute('data-position').includes('6') ? 'Midfielder 2' :
                               position.getAttribute('data-position').includes('7') ? 'Midfielder 3' :
                               position.getAttribute('data-position').includes('8') ? 'Forward 1' : 
                               position.getAttribute('data-position').includes('9') ? 'Forward 2' : 'Forward 3';
          position.className = positionClasses + ' empty';
          
          // Show notification
          showNotification('Player removed from position', 'success');
        });
        droppedPlayer.appendChild(removeBtn);
        
        // Show success notification
        showNotification(`Player successfully placed in ${validPositions[0]} position!`, 'success');
      }
    });
  });
}

// Initialize team actions
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to team action buttons
  const loadMarketPlayersBtn = document.getElementById('load-market-players');
  const clearTeamBtn = document.getElementById('clear-team');
  
  if (loadMarketPlayersBtn) {
    loadMarketPlayersBtn.addEventListener('click', loadMarketPlayers);
  }
  
  if (clearTeamBtn) {
    clearTeamBtn.addEventListener('click', clearTeam);
  }
  
  // Initialize drag and drop on load
  setTimeout(initializeDragAndDrop, 5000);
});

// Function to remove a player from localStorage by name
function removePlayerFromLocalStorage(playerName) {
  // Get current team from localStorage
  let myTeam = JSON.parse(localStorage.getItem('myTeam')) || [];
  
  // Find and remove the player by name
  myTeam = myTeam.filter(player => player.NAME !== playerName);
  
  // Save updated team back to localStorage
  localStorage.setItem('myTeam', JSON.stringify(myTeam));
  
  console.log(`Removed player "${playerName}" from localStorage`);
}

document.addEventListener('mousemove', function(e) {
  const tooltip = document.getElementById('position-tooltip');
  if (tooltip && tooltip.style.display === 'block') {
    tooltip.style.left = (e.clientX + 15) + 'px';
    tooltip.style.top = (e.clientY + 15) + 'px';
  }
});
