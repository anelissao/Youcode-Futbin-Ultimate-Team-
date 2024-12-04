

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

fetch('http://localhost:3000/players')
.then(response => response.json())
.then(players => {
    console.log(players);


      const card = document.createElement('div');
      card.classList.add('player-card');
        console.log();

        let playersArrTemp = [`<div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[777].RATING}</span>
              <span class="card-position">${players[777].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="${players[777].CLUB_IMAGE}" alt="retired">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[777].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[777].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[777].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[777].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[777].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[777].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[777].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[777].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[777].PHYSICAL}</span>
                <span class="card-attribute__name">PHY</span>
              </div>
            </div>
          </div>
        </div>
        `,


        `<div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[104].RATING}</span>
              <span class="card-position">${players[104].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="${players[104].CLUB_IMAGE}" alt="retired">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[104].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[104].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[104].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[104].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[104].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[104].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[104].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[104].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[104].PHYSICAL}</span>
                <span class="card-attribute__name">PHY</span>
              </div>
            </div>
          </div>
        </div>
        `,

        `<div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[131].RATING}</span>
              <span class="card-position">${players[131].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="${players[131].CLUB_IMAGE}" alt="retired">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[131].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[131].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[131].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[131].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[131].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[131].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[131].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[131].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[131].PHYSICAL}</span>
                <span class="card-attribute__name">PHY</span>
              </div>
            </div>
          </div>
        </div>
        `,

        `<div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[1].RATING}</span>
              <span class="card-position">${players[1].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="${players[1].CLUB_IMAGE}" alt="retired">
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
              <img class="card-club" src="${players[7].CLUB_IMAGE}" alt="retired">
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
              <img class="card-club" src="${players[6].CLUB_IMAGE}" alt="retired">
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

        `<div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[6393].RATING}</span>
              <span class="card-position">${players[6393].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="${players[6393].CLUB_IMAGE}" alt="retired">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[6393].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[6393].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[6393].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[6393].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[6393].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[6393].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[6393].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[6393].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[6393].PHYSICAL}</span>
                <span class="card-attribute__name">PHY</span>
              </div>
            </div>
          </div>
        </div>
        `,

        `<div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[13640].RATING}</span>
              <span class="card-position">${players[13640].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="${players[13640].CLUB_IMAGE}" alt="retired">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[13640].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[13640].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[13640].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[13640].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[13640].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[13640].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[13640].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[13640].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[13640].PHYSICAL}</span>
                <span class="card-attribute__name">PHY</span>
              </div>
            </div>
          </div>
        </div>
        `,

        `<div class="card">
          <div class="card-aside">
            <div class="card-overall">
              <span class="card-rating">${players[13639].RATING}</span>
              <span class="card-position">${players[13639].POSITION}</span>
            </div>
            <div class="card-team">
              <img class="card-club" src="${players[13639].CLUB_IMAGE}" alt="retired">
              <img class="card-national" src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag">
            </div>
            <div class="card-info">
              <span>${players[13639].TIER}</span>
            </div>
          </div>
          <div class="card-main">
            <div class="card-header">
              <div class="card-header-bg"></div>
              <img class="card-image" src="${players[13639].IMAGE}" alt="Player Image">
            </div>
            <h1 class="card-name">${players[13639].NAME}</h1>
            <div class="card-attributes">
              <div class="card-attribute">
                <span class="card-attribute__value">${players[13639].PACE}</span>
                <span class="card-attribute__name">PAC</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[13639].DRIBBLING}</span>
                <span class="card-attribute__name">DRI</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[13639].SHOOTING}</span>
                <span class="card-attribute__name">SHO</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[13639].DEFENDING}</span>
                <span class="card-attribute__name">DEF</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[13639].PASSING}</span>
                <span class="card-attribute__name">PAS</span>
              </div>
              <div class="card-attribute">
                <span class="card-attribute__value">${players[13639].PHYSICAL}</span>
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
              <img class="card-club" src="${players[8].CLUB_IMAGE}" alt="retired">
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
              <img class="card-club" src="${players[414].CLUB_IMAGE}" alt="retired">
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
              <img class="card-club" src="${players[2063].CLUB_IMAGE}" alt="retired">
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
              <img class="card-club" src="${players[177].CLUB_IMAGE}" alt="retired">
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
              <img class="card-club" src="${players[3870].CLUB_IMAGE}" alt="retired">
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
              <img class="card-club" src="${players[7820].CLUB_IMAGE}" alt="retired">
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
              <img class="card-club" src="${players[69].CLUB_IMAGE}" alt="retired">
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

        for(let i = 0; i < playersArrTemp.length; i++){
          playersArr.push(playersArrTemp[i])
        }
          let playersArrLength = playersArr.length
          console.log(playersArrLength)
      for(let i = 0; i < playersArrLength; i++){
        // console.log(playersArr[0]);
        
        container.innerHTML += playersArr[i];
      }
      // console.log(container) 
      // container.appendChild(bench)
      

      

  })
  .catch(error => console.error('Error fetching data:', error));
  

setTimeout(() => {


    const cards = document.querySelectorAll('.card')
  
  console.log(cards.length);
  
    for (let i = 0; i < cards.length; i++) {
      console.log(i);
      let selected = false
      
      cards[i].addEventListener('click', (e)=> {
        console.log(e.currentTarget.querySelector(".card-position").textContent);
        let pos = e.currentTarget.querySelector(".card-position").textContent
        
        //
        const pitchPosition = document.querySelectorAll(`.${pos}`)
        
        for (let j = 0; j < pitchPosition.length; j++) {
          pitchPosition[j].classList.add('selected');
        }
        for(let x = 0; x < pitchPosition.length; x++){
          pitchPosition[x].addEventListener('click', (e)=> {
            if(selected){
              return 0
            }
            pitchPosition[x].replaceWith(cards[i])
            for (let j = 0; j < pitchPosition.length; j++) {
              console.log(pitchPosition[i])
              pitchPosition[j].classList.remove('selected');
              console.log(pitchPosition[i])
            }
            cards[i].classList.add('player')
            playersArr.splice(i, 1)
            setPos()
            selected = true
            
          })
          
        }
        //
      });
      if(selected){
        break
      }
    }
}, 4000);
  