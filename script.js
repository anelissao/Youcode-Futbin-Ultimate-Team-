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

        let playersArrTemp = [`
          <div class="player-node">
          <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
              <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                  <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                      <div class="text-[0.9rem] mt-2 card-rating">${players[777].RATING}</div>
                      <div class="text-[0.8rem] card-position">${players[777].POSITION}</div>
                      <div class="block my-[0.2rem_0]">
                          <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                      </div>
                      <div class="block">
                          <img src="${players[777].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                      </div>
                  </div>
                  <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                      <img src="${players[777].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                      <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                          <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                          <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                      </div>
                  </div>
              </div>
              <div class="relative">
                  <div class="text-[#e9cc74] w-[80%] mx-auto">
                      <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                          <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[777].NAME}</span>
                      </div>
                      <div class="flex justify-center mt-[0.2rem]">
                          <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                              <div class="flex items-center text-[0.7rem] uppercase">
                                  <span class="font-bold mr-[0.2rem]">${players[777].PACE}</span>
                                  <span class="font-light">PAC</span>
                              </div>
                              <div class="flex items-center text-[0.7rem] uppercase">
                                  <span class="font-bold mr-[0.2rem]">${players[777].SHOOTING}</span>
                                  <span class="font-light">SHO</span>
                              </div>
                              <div class="flex items-center text-[0.7rem] uppercase">
                                  <span class="font-bold mr-[0.2rem]">${players[777].PASSING}</span>
                                  <span class="font-light">PAS</span>
                              </div>
                          </div>
                          <div>
                              <div class="flex items-center text-[0.7rem] uppercase">
                                  <span class="font-bold mr-[0.2rem]">${players[777].DRIBBLING}</span>
                                  <span class="font-light">DRI</span>
                              </div>
                              <div class="flex items-center text-[0.7rem] uppercase">
                                  <span class="font-bold mr-[0.2rem]">${players[777].DEFENDING}</span>
                                  <span class="font-light">DEF</span>
                              </div>
                              <div class="flex items-center text-[0.7rem] uppercase">
                                  <span class="font-bold mr-[0.2rem]">${players[777].PHYSICAL}</span>
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
        `,


        `<div class="player-node">
        <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
            <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                    <div class="text-[0.9rem] mt-2 card-rating">${players[104].RATING}</div>
                    <div class="text-[0.8rem] card-position">${players[104].POSITION}</div>
                    <div class="block my-[0.2rem_0]">
                        <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                    </div>
                    <div class="block">
                        <img src="${players[104].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                    </div>
                </div>
                <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                    <img src="${players[104].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                    <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                        <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                        <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="text-[#e9cc74] w-[80%] mx-auto">
                    <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                        <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[104].NAME}</span>
                    </div>
                    <div class="flex justify-center mt-[0.2rem]">
                        <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[104].PACE}</span>
                                <span class="font-light">PAC</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[104].SHOOTING}</span>
                                <span class="font-light">SHO</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[104].PASSING}</span>
                                <span class="font-light">PAS</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[104].DRIBBLING}</span>
                                <span class="font-light">DRI</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[104].DEFENDING}</span>
                                <span class="font-light">DEF</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[104].PHYSICAL}</span>
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
        `,

        `<div class="player-node">
        <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
            <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                    <div class="text-[0.9rem] mt-2 card-rating">${players[131].RATING}</div>
                    <div class="text-[0.8rem] card-position">${players[131].POSITION}</div>
                    <div class="block my-[0.2rem_0]">
                        <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                    </div>
                    <div class="block">
                        <img src="${players[131].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                    </div>
                </div>
                <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                    <img src="${players[131].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                    <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                        <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                        <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="text-[#e9cc74] w-[80%] mx-auto">
                    <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                        <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[131].NAME}</span>
                    </div>
                    <div class="flex justify-center mt-[0.2rem]">
                        <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[131].PACE}</span>
                                <span class="font-light">PAC</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[131].SHOOTING}</span>
                                <span class="font-light">SHO</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[131].PASSING}</span>
                                <span class="font-light">PAS</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[131].DRIBBLING}</span>
                                <span class="font-light">DRI</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[131].DEFENDING}</span>
                                <span class="font-light">DEF</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[131].PHYSICAL}</span>
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
        `,

        `<div class="player-node">
        <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
            <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                    <div class="text-[0.9rem] mt-2 card-rating">${players[1].RATING}</div>
                    <div class="text-[0.8rem] card-position">${players[1].POSITION}</div>
                    <div class="block my-[0.2rem_0]">
                        <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                    </div>
                    <div class="block">
                        <img src="${players[1].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                    </div>
                </div>
                <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                    <img src="${players[1].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                    <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                        <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                        <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="text-[#e9cc74] w-[80%] mx-auto">
                    <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                        <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[1].NAME}</span>
                    </div>
                    <div class="flex justify-center mt-[0.2rem]">
                        <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[1].PACE}</span>
                                <span class="font-light">PAC</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[1].SHOOTING}</span>
                                <span class="font-light">SHO</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[1].PASSING}</span>
                                <span class="font-light">PAS</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[1].DRIBBLING}</span>
                                <span class="font-light">DRI</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[1].DEFENDING}</span>
                                <span class="font-light">DEF</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[1].PHYSICAL}</span>
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
        `,
        
         `<div class="player-node">
         <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
             <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                 <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                     <div class="text-[0.9rem] mt-2 card-rating">${players[7].RATING}</div>
                     <div class="text-[0.8rem] card-position">${players[7].POSITION}</div>
                     <div class="block my-[0.2rem_0]">
                         <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                     </div>
                     <div class="block">
                         <img src="${players[7].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                     </div>
                 </div>
                 <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                     <img src="${players[7].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                     <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                         <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                         <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                     </div>
                 </div>
             </div>
             <div class="relative">
                 <div class="text-[#e9cc74] w-[80%] mx-auto">
                     <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                         <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[7].NAME}</span>
                     </div>
                     <div class="flex justify-center mt-[0.2rem]">
                         <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[7].PACE}</span>
                                 <span class="font-light">PAC</span>
                             </div>
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[7].SHOOTING}</span>
                                 <span class="font-light">SHO</span>
                             </div>
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[7].PASSING}</span>
                                 <span class="font-light">PAS</span>
                             </div>
                         </div>
                         <div>
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[7].DRIBBLING}</span>
                                 <span class="font-light">DRI</span>
                             </div>
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[7].DEFENDING}</span>
                                 <span class="font-light">DEF</span>
                             </div>
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[7].PHYSICAL}</span>
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
        `,
        
         `<div class="player-node">
         <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
             <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                 <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                     <div class="text-[0.9rem] mt-2 card-rating">${players[6].RATING}</div>
                     <div class="text-[0.8rem] card-position">${players[6].POSITION}</div>
                     <div class="block my-[0.2rem_0]">
                         <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                     </div>
                     <div class="block">
                         <img src="${players[6].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                     </div>
                 </div>
                 <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                     <img src="${players[6].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                     <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                         <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                         <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                     </div>
                 </div>
             </div>
             <div class="relative">
                 <div class="text-[#e9cc74] w-[80%] mx-auto">
                     <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                         <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[6].NAME}</span>
                     </div>
                     <div class="flex justify-center mt-[0.2rem]">
                         <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[6].PACE}</span>
                                 <span class="font-light">PAC</span>
                             </div>
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[6].SHOOTING}</span>
                                 <span class="font-light">SHO</span>
                             </div>
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[6].PASSING}</span>
                                 <span class="font-light">PAS</span>
                             </div>
                         </div>
                         <div>
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[6].DRIBBLING}</span>
                                 <span class="font-light">DRI</span>
                             </div>
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[6].DEFENDING}</span>
                                 <span class="font-light">DEF</span>
                             </div>
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[6].PHYSICAL}</span>
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
        `,

        `<div class="player-node">
        <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
            <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                    <div class="text-[0.9rem] mt-2 card-rating">${players[6393].RATING}</div>
                    <div class="text-[0.8rem] card-position">${players[6393].POSITION}</div>
                    <div class="block my-[0.2rem_0]">
                        <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                    </div>
                    <div class="block">
                        <img src="${players[6393].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                    </div>
                </div>
                <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                    <img src="${players[6393].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                    <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                        <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                        <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="text-[#e9cc74] w-[80%] mx-auto">
                    <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                        <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[6393].NAME}</span>
                    </div>
                    <div class="flex justify-center mt-[0.2rem]">
                        <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[6393].PACE}</span>
                                <span class="font-light">PAC</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[6393].SHOOTING}</span>
                                <span class="font-light">SHO</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[6393].PASSING}</span>
                                <span class="font-light">PAS</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[6393].DRIBBLING}</span>
                                <span class="font-light">DRI</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[6393].DEFENDING}</span>
                                <span class="font-light">DEF</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[6393].PHYSICAL}</span>
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
        `,

        `<div class="player-node">
        <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
            <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                    <div class="text-[0.9rem] mt-2 card-rating">${players[13640].RATING}</div>
                    <div class="text-[0.8rem] card-position">${players[13640].POSITION}</div>
                    <div class="block my-[0.2rem_0]">
                        <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                    </div>
                    <div class="block">
                        <img src="${players[13640].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                    </div>
                </div>
                <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                    <img src="${players[13640].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                    <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                        <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                        <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="text-[#e9cc74] w-[80%] mx-auto">
                    <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                        <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[13640].NAME}</span>
                    </div>
                    <div class="flex justify-center mt-[0.2rem]">
                        <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[13640].PACE}</span>
                                <span class="font-light">PAC</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[13640].SHOOTING}</span>
                                <span class="font-light">SHO</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[13640].PASSING}</span>
                                <span class="font-light">PAS</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[13640].DRIBBLING}</span>
                                <span class="font-light">DRI</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[13640].DEFENDING}</span>
                                <span class="font-light">DEF</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[13640].PHYSICAL}</span>
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
        `,

        `<div class="player-node">
        <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
            <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                    <div class="text-[0.9rem] mt-2 card-rating">${players[13639].RATING}</div>
                    <div class="text-[0.8rem] card-position">${players[13639].POSITION}</div>
                    <div class="block my-[0.2rem_0]">
                        <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                    </div>
                    <div class="block">
                        <img src="${players[13639].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                    </div>
                </div>
                <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                    <img src="${players[13639].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                    <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                        <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                        <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="text-[#e9cc74] w-[80%] mx-auto">
                    <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                        <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[13639].NAME}</span>
                    </div>
                    <div class="flex justify-center mt-[0.2rem]">
                        <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[13639].PACE}</span>
                                <span class="font-light">PAC</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[13639].SHOOTING}</span>
                                <span class="font-light">SHO</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[13639].PASSING}</span>
                                <span class="font-light">PAS</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[13639].DRIBBLING}</span>
                                <span class="font-light">DRI</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[13639].DEFENDING}</span>
                                <span class="font-light">DEF</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[13639].PHYSICAL}</span>
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
        `,
        
         `<div class="player-node">
         <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
             <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                 <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                     <div class="text-[0.9rem] mt-2 card-rating">${players[8].RATING}</div>
                     <div class="text-[0.8rem] card-position">${players[8].POSITION}</div>
                     <div class="block my-[0.2rem_0]">
                         <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                     </div>
                     <div class="block">
                         <img src="${players[8].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                     </div>
                 </div>
                 <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                     <img src="${players[8].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                     <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                         <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                         <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                     </div>
                 </div>
             </div>
             <div class="relative">
                 <div class="text-[#e9cc74] w-[80%] mx-auto">
                     <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                         <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[8].NAME}</span>
                     </div>
                     <div class="flex justify-center mt-[0.2rem]">
                         <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[8].PACE}</span>
                                 <span class="font-light">PAC</span>
                             </div>
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[8].SHOOTING}</span>
                                 <span class="font-light">SHO</span>
                             </div>
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[8].PASSING}</span>
                                 <span class="font-light">PAS</span>
                             </div>
                         </div>
                         <div>
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[8].DRIBBLING}</span>
                                 <span class="font-light">DRI</span>
                             </div>
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[8].DEFENDING}</span>
                                 <span class="font-light">DEF</span>
                             </div>
                             <div class="flex items-center text-[0.7rem] uppercase">
                                 <span class="font-bold mr-[0.2rem]">${players[8].PHYSICAL}</span>
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
        `,
        
        `<div class="player-node">
        <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
            <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                    <div class="text-[0.9rem] mt-2 card-rating">${players[414].RATING}</div>
                    <div class="text-[0.8rem] card-position">${players[414].POSITION}</div>
                    <div class="block my-[0.2rem_0]">
                        <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                    </div>
                    <div class="block">
                        <img src="${players[414].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                    </div>
                </div>
                <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                    <img src="${players[414].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                    <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                        <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                        <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="text-[#e9cc74] w-[80%] mx-auto">
                    <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                        <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[414].NAME}</span>
                    </div>
                    <div class="flex justify-center mt-[0.2rem]">
                        <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[414].PACE}</span>
                                <span class="font-light">PAC</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[414].SHOOTING}</span>
                                <span class="font-light">SHO</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[414].PASSING}</span>
                                <span class="font-light">PAS</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[414].DRIBBLING}</span>
                                <span class="font-light">DRI</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[414].DEFENDING}</span>
                                <span class="font-light">DEF</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[414].PHYSICAL}</span>
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
        `,
        
        `<div class="player-node">
        <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
            <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                    <div class="text-[0.9rem] mt-2 card-rating">${players[2063].RATING}</div>
                    <div class="text-[0.8rem] card-position">${players[2063].POSITION}</div>
                    <div class="block my-[0.2rem_0]">
                        <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                    </div>
                    <div class="block">
                        <img src="${players[2063].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                    </div>
                </div>
                <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                    <img src="${players[2063].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                    <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                        <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                        <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="text-[#e9cc74] w-[80%] mx-auto">
                    <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                        <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[2063].NAME}</span>
                    </div>
                    <div class="flex justify-center mt-[0.2rem]">
                        <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[2063].PACE}</span>
                                <span class="font-light">PAC</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[2063].SHOOTING}</span>
                                <span class="font-light">SHO</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[2063].PASSING}</span>
                                <span class="font-light">PAS</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[2063].DRIBBLING}</span>
                                <span class="font-light">DRI</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[2063].DEFENDING}</span>
                                <span class="font-light">DEF</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[2063].PHYSICAL}</span>
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
        `,
        
        `<div class="player-node">
        <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
            <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                    <div class="text-[0.9rem] mt-2 card-rating">${players[177].RATING}</div>
                    <div class="text-[0.8rem] card-position">${players[177].POSITION}</div>
                    <div class="block my-[0.2rem_0]">
                        <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                    </div>
                    <div class="block">
                        <img src="${players[177].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                    </div>
                </div>
                <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                    <img src="${players[177].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                    <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                        <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                        <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="text-[#e9cc74] w-[80%] mx-auto">
                    <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                        <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[177].NAME}</span>
                    </div>
                    <div class="flex justify-center mt-[0.2rem]">
                        <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[177].PACE}</span>
                                <span class="font-light">PAC</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[177].SHOOTING}</span>
                                <span class="font-light">SHO</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[177].PASSING}</span>
                                <span class="font-light">PAS</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[177].DRIBBLING}</span>
                                <span class="font-light">DRI</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[177].DEFENDING}</span>
                                <span class="font-light">DEF</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[177].PHYSICAL}</span>
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
        `,
        
        `<div class="player-node">
        <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
            <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                    <div class="text-[0.9rem] mt-2 card-rating">${players[3870].RATING}</div>
                    <div class="text-[0.8rem] card-position">${players[3870].POSITION}</div>
                    <div class="block my-[0.2rem_0]">
                        <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                    </div>
                    <div class="block">
                        <img src="${players[3870].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                    </div>
                </div>
                <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                    <img src="${players[3870].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                    <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                        <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                        <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="text-[#e9cc74] w-[80%] mx-auto">
                    <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                        <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[3870].NAME}</span>
                    </div>
                    <div class="flex justify-center mt-[0.2rem]">
                        <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[3870].PACE}</span>
                                <span class="font-light">PAC</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[3870].SHOOTING}</span>
                                <span class="font-light">SHO</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[3870].PASSING}</span>
                                <span class="font-light">PAS</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[3870].DRIBBLING}</span>
                                <span class="font-light">DRI</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[3870].DEFENDING}</span>
                                <span class="font-light">DEF</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[3870].PHYSICAL}</span>
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
        `,
        
        `<div class="player-node">
        <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
            <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                    <div class="text-[0.9rem] mt-2 card-rating">${players[7820].RATING}</div>
                    <div class="text-[0.8rem] card-position">${players[7820].POSITION}</div>
                    <div class="block my-[0.2rem_0]">
                        <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                    </div>
                    <div class="block">
                        <img src="${players[7820].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                    </div>
                </div>
                <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                    <img src="${players[7820].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                    <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                        <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                        <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="text-[#e9cc74] w-[80%] mx-auto">
                    <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                        <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[7820].NAME}</span>
                    </div>
                    <div class="flex justify-center mt-[0.2rem]">
                        <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[7820].PACE}</span>
                                <span class="font-light">PAC</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[7820].SHOOTING}</span>
                                <span class="font-light">SHO</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[7820].PASSING}</span>
                                <span class="font-light">PAS</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[7820].DRIBBLING}</span>
                                <span class="font-light">DRI</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[7820].DEFENDING}</span>
                                <span class="font-light">DEF</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[7820].PHYSICAL}</span>
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
        `,
        
        `<div class="player-node">
        <div class="relative w-[120px] h-[192px] bg-cover bg-center p-[1rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
            <div class="relative flex text-[#e9cc74] px-[0.6rem]">
                <div class="absolute py-[0.4rem_0] text-xs uppercase font-light">
                    <div class="text-[0.9rem] mt-2 card-rating">${players[69].RATING}</div>
                    <div class="text-[0.8rem] card-position">${players[69].POSITION}</div>
                    <div class="block my-[0.2rem_0]">
                        <img src="https://flags.fmcdn.net/data/flags/w580/pt.png" alt="National Flag" class="w-[0.8rem] h-[12px] object-contain" />
                    </div>
                    <div class="block">
                        <img src="${players[69].CLUB_IMAGE}" alt="Club" class="w-[0.9rem] h-[16px] object-contain card-club" />
                    </div>
                </div>
                <div class="w-[70px] h-[70px] mx-auto overflow-hidden">
                    <img src="${players[69].IMAGE}" alt="Player" class="w-full h-full object-contain relative right-[-0.6rem] bottom-0" />
                    <div class="absolute right-0 bottom-[-0.5rem] w-full h-[1rem] text-right text-[#333] text-[0.5rem] font-bold uppercase">
                        <span class="ml-[0.4rem] text-shadow-lg">4*SM</span>
                        <span class="ml-[0.4rem] text-shadow-lg">4*WF</span>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="text-[#e9cc74] w-[80%] mx-auto">
                    <div class="text-center text-[0.9rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem] px-1">
                        <span class="block text-shadow-lg truncate max-w-[75px] mx-auto text-[0.7rem] leading-tight">${players[69].NAME}</span>
                    </div>
                    <div class="flex justify-center mt-[0.2rem]">
                        <div class="pr-[0.8rem] border-r-2 border-[#e9cc74]/[0.1]">
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[69].PACE}</span>
                                <span class="font-light">PAC</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[69].SHOOTING}</span>
                                <span class="font-light">SHO</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[69].PASSING}</span>
                                <span class="font-light">PAS</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[69].DRIBBLING}</span>
                                <span class="font-light">DRI</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[69].DEFENDING}</span>
                                <span class="font-light">DEF</span>
                            </div>
                            <div class="flex items-center text-[0.7rem] uppercase">
                                <span class="font-bold mr-[0.2rem]">${players[69].PHYSICAL}</span>
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

    const Dbtns = document.querySelectorAll(".d-btn");
    console.log(Dbtns);
    const playersNode = document.querySelectorAll(".player-node");

    for (let k = 0; k < Dbtns.length; k++) {
        Dbtns[k].addEventListener('click', () => {
            playersArr.splice(k, 1);
            playersNode[k].innerHTML = "";
            console.log('L');
        });
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
      e.dataTransfer.effectAllowed = 'move';
      
      // Remove old instance if it's being moved from the pitch
      if (element.closest('#pitch')) {
        // Mark this element for removal on successful drop
        element.setAttribute('data-being-moved', 'true');
      }
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
      const draggedPosition = e.dataTransfer.getData('position');
      // Check if the dragged player's position matches any valid position for this slot
      const isValidPosition = validPositions.some(validPos => 
        draggedPosition.includes(validPos) || 
        validPos.includes(draggedPosition)
      );
      
      // Only allow drop if position matches
      if (isValidPosition) {
        e.preventDefault();
        position.classList.add('drag-over');
      }
    });
    
    // Visual feedback when dragging over
    position.addEventListener('dragenter', function(e) {
      const draggedPosition = e.dataTransfer.getData('position');
      const isValidPosition = validPositions.some(validPos => 
        draggedPosition.includes(validPos) || 
        validPos.includes(draggedPosition)
      );
      
      if (isValidPosition) {
        e.preventDefault();
        position.classList.add('drag-over');
      }
    });
    
    // Remove visual feedback when leaving
    position.addEventListener('dragleave', function() {
      position.classList.remove('drag-over');
    });
    
    // Handle the drop event
    position.addEventListener('drop', function(e) {
      e.preventDefault();
      position.classList.remove('drag-over');
      
      // Get the dragged player data and position
      const playerData = e.dataTransfer.getData('text/plain');
      const draggedPosition = e.dataTransfer.getData('position');
      
      // Check if the position is valid
      const isValidPosition = validPositions.some(validPos => 
        draggedPosition.includes(validPos) || 
        validPos.includes(draggedPosition)
      );
      
      if (!isValidPosition) {
        console.log(`Invalid position! ${draggedPosition} cannot be placed in ${validPositions.join(', ')}`);
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
        });
        droppedPlayer.appendChild(removeBtn);
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
`;
document.head.appendChild(style);
