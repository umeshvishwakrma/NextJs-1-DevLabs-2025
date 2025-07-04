function createDice(num){
    const dotPos={
        1:[
            [50,50]
        ],
        2:[
            [20,80],
            [80,20]
        ],
        3:[
            [20,20],
            [50,50],
            [80,80]
        ],
        4:[
            [20,20],
            [20,80],
            [80,20],
            [80,80]
        ],
        5:[
            [20,20],
            [20,80],
            [50,50],
            [80,20],
            [80,80]
        ],
        6:[
            [20,20],
            [20,80],
            [50,20],
            [50,80],
            [80,20],
            [80,80]
        ]
    };
    const dice=document.createElement("div");
    dice.classList.add("dice");
    for(const dotPosition of dotPos[num]){
        const dot=document.createElement("div");
        dot.classList.add("dice-dot");
        dot.style.setProperty("--top",dotPosition[0]+"%");
        dot.style.setProperty("--left",dotPosition[1]+"%");
        dice.appendChild(dot);
    }
    
    return dice;
}

function randomDice(diceContainer){
  diceContainer.innerHTML="";
  const random=Math.floor((Math.random()*6)+1);
  const dice=createDice(random);
  diceContainer.appendChild(dice);
}
const diceContainer= document.querySelector(".dice-container");
const btnRoll=document.querySelector(".roll");
btnRoll.addEventListener("click",()=>{
    randomDice(diceContainer);
})