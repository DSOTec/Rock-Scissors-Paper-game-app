setTimeout(() => {
    document.body.classList.remove("preload")
}, 500)

const rulesbtn = document.querySelector(".rules-btn");
const closebtn = document.querySelector(".fa-x");
const modalrules = document.querySelector(".modal");

rulesbtn.addEventListener('click', ()=>{
   modalrules.style.opacity = 1;
});
closebtn.addEventListener("click", ()=>{
    modalrules.style.opacity = 0;
})