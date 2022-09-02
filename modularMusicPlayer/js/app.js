import musicCards from "./component/cards/musicCards.js";
const audio = document.querySelector("#audio");
const playMiniButton = document.querySelector(".play");
playMiniButton.addEventListener("click", ()=>{
    console.log("paleyeee");
    
});
// add cards in main js file
musicCards(audio);
