

const pitch = document.getElementById("pitch");
const pitchWidth = pitch.offsetWidth;
const pitchHeight = pitch.offsetHeight;
const playerWidth = 200; // Player card width
const playerHeight = 50; // Player card height


// Define player positions (percentage values)
const positions = [
  { x: 50, y: 90 }, // Goalkeeper
  
  { x: 15, y: 60 }, // Defender 1
  { x: 40, y: 70 }, // Defender 2
  { x: 60, y: 70 }, // Defender 3
  { x: 85, y: 60 }, // Defender 4
  
  { x: 30, y: 35 }, // Midfielder 1
  { x: 50, y: 50 }, // Midfielder 2
  { x: 70, y: 35 }, // Midfielder 3
  
  { x: 25, y: 15 }, // Forward 1
  { x: 50, y: 10 }, // Forward 2
  { x: 75, y: 15 }, // Forward 3
];

// Position each player dynamically
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

const container = document.getElementById('bench')[0]; // Assuming only one 'card' container exists

fetch('http://localhost:3000/players')
  .then(response => response.json())
  .then(players => {
    console.log(players);

    players.forEach(player => {
      const card = document.createElement('div');
      card.classList.add('player-card');
        console.log();

        let playersArr = [`<div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[1].RATING}</span>
              <span class="card-position">${players[1].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png" alt="Club Logo">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[1].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[1].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[1].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[1].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[1].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[1].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[1].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[1].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[1].PHYSICAL}</span>
                <span class="card-attribute__name">PHY</span>
              </div>
            </div>
          </div>
        </div>
        `,
        
         `       <div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[7].RATING}</span>
              <span class="card-position">${players[7].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png" alt="Club Logo">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[7].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[7].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[7].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[7].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[7].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[7].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[7].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[7].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[7].PHYSICAL}</span>
                <span class="card-attribute__name">PHY</span>
              </div>
            </div>
          </div>
        </div>
        `,
        
         `       <div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[6].RATING}</span>
              <span class="card-position">${players[6].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png" alt="Club Logo">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[6].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[6].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[6].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[6].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[6].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[6].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[6].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[6].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[6].PHYSICAL}</span>
                <span class="card-attribute__name">PHY</span>
              </div>
            </div>
          </div>
        </div>
        `,
        
         `       <div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[8].RATING}</span>
              <span class="card-position">${players[8].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png" alt="Club Logo">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[8].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[8].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[8].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[8].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[8].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[8].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[8].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[8].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[8].PHYSICAL}</span>
                <span class="card-attribute__name">PHY</span>
              </div>
            </div>
          </div>
        </div>
        `,
        
        `<div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[414].RATING}</span>
              <span class="card-position">${players[414].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png" alt="Club Logo">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[414].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[414].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[414].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[414].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[414].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[414].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[414].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[414].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[414].PHYSICAL}</span>
                <span class="card-attribute__name">PHY</span>
              </div>
            </div>
          </div>
        </div>
        `,
        
        `<div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[2063].RATING}</span>
              <span class="card-position">${players[2063].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png" alt="Club Logo">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[2063].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[2063].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[2063].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[2063].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[2063].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[2063].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[2063].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[2063].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[2063].PHYSICAL}</span>
                <span class="card-attribute__name">PHY</span>
              </div>
            </div>
          </div>
        </div>
        `,
        
        `<div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[177].RATING}</span>
              <span class="card-position">${players[177].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png" alt="Club Logo">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[177].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[177].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[177].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[177].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[177].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[177].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[177].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[177].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[177].PHYSICAL}</span>
                <span class="card-attribute__name">PHY</span>
              </div>
            </div>
          </div>
        </div>
        `,
        
        `<div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[3870].RATING}</span>
              <span class="card-position">${players[3870].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png" alt="Club Logo">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[3870].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[3870].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[3870].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[3870].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[3870].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[3870].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[3870].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[3870].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[3870].PHYSICAL}</span>
                <span class="card-attribute__name">PHY</span>
              </div>
            </div>
          </div>
        </div>
        `,
        
        `<div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[7820].RATING}</span>
              <span class="card-position">${players[7820].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png" alt="Club Logo">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[7820].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[7820].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[7820].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[7820].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[7820].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[7820].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[7820].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[7820].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[7820].PHYSICAL}</span>
                <span class="card-attribute__name">PHY</span>
              </div>
            </div>
          </div>
        </div>
        `,
        
        `<div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[69].RATING}</span>
              <span class="card-position">${players[69].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png" alt="Club Logo">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[69].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[69].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[69].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[69].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[69].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[69].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[69].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[69].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[69].PHYSICAL}</span>
                <span class="card-attribute__name">PHY</span>
              </div>
            </div>
          </div>
        </div>
        `]
          let playersArrLength = playersArr.length
      
      for(let i = 0; i < playersArrLength; i++){
        bench.innerHTML += playersArr[i];
      }  

      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
  const playersDivs = document.querySelectorAll('#pitch .player');

  