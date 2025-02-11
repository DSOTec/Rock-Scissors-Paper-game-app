setTimeout(() => {
    document.body.classList.remove("preload")
}, 500)

const CHOICES = [
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    },
    {
        name: "rock",
        beats: "scissors"
    },
]

const choiceButton = document.querySelectorAll(".choice-btn");
const gameDiv  = document.querySelectorAll(".game");
const result = document.querySelectorAll(".results");
const resultDivs = document.querySelectorAll(".realResults");

choiceButton.forEach( button => {
    button.addEventListener('click', ()=>{
        const choiceName = button.dataset.choice;
        const choice = CHOICES.find(choice => choice.name === choiceName);
        choose(choice);
    })
    
})

function choose(choice){
    const aichoice = aiChoose()
    displayResults([choice, aichoice])
}

function aiChoose(){
    const rand = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[rand ]
}
function displayResults(results){
    resultDivs.forEach((result, idx) =>{
        setTimeout(( ) => {
            result.innerHTML = `
            <div class="choice ${results[idx].name}">
            <img src="icon-${results[idx].name}.svg" alt="${results[idx].name}" /> 
            </div>
            `;
        }, idx * 1000);
    }) 
   gameDiv.classList.toggle('hidden');
}

const rulesbtn = document.querySelector(".rules-btn");
const closebtn = document.querySelector(".fa-x");
const modalrules = document.querySelector(".modal");

rulesbtn.addEventListener('click', ()=>{
   modalrules.style.opacity = 1;
});
closebtn.addEventListener("click", ()=>{
    modalrules.style.display = "none";
})

 
