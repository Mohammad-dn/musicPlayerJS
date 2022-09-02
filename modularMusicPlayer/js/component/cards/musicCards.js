import musics from "../../../data/musics.js";
import setCurrentMusic from "../setCurrentMusic.js";
import { musicCard } from "./musicCard.js";
const musicsContainer = document.querySelector(".musics-container");

function musicCards() {
  musics().forEach((song) => {
    musicsContainer.innerHTML += musicCard(song);
    setCurrentMusic();
  });
}
export default musicCards