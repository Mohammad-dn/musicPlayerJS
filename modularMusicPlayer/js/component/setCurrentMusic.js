import musics from "../../data/musics.js";
import audioPlayer from "../utils/audioPlay.js";
import updateCurrentMusicUI from "./updateCurrentMusicUi.js";
const musicsContainer = document.querySelector(".musics-container");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const audio = document.querySelector("#audio");
const repeatMusic = document.getElementById("repeat-music");
const shuffleMusic = document.getElementById("shuffle-button");
const volomeInput = document.getElementById("volome-input");
let indexOfCurrentMusic = 0;
let repeatMusicstate = false;
let shuffleMusicState = false;
repeatMusic.onclick = function () {
  repeatMusicstate = !repeatMusicstate;
  if (repeatMusicstate) repeatMusic.style.backgroundColor = "orange";
  else repeatMusic.style.backgroundColor = "transparent";
};
shuffleMusic.onclick = function () {
  shuffleMusicState = !shuffleMusicState;
  if (shuffleMusicState) shuffleMusic.style.backgroundColor = "orange";
  else shuffleMusic.style.backgroundColor = "blue";
  const randomPlayMusic = Math.floor(Math.random() * musics().length);
  updateCurrentMusicUI(musics()[randomPlayMusic]);
  console.log(randomPlayMusic);
  shuffleMusic.style.backgroundColor = "orange";
};
volomeInput.onchange = () => {
  audio.volume = volomeInput.value / 100;
};

const handeNextMusic = function () {
  if (repeatMusicstate)
    return updateCurrentMusicUI(musics()[indexOfCurrentMusic]);
  if (shuffleMusicState) return updateCurrentMusicUI;
  if (indexOfCurrentMusic === musics().length - 1) {
    indexOfCurrentMusic = 0;
    updateCurrentMusicUI(musics()[indexOfCurrentMusic]);
  } else {
    indexOfCurrentMusic++;
    updateCurrentMusicUI(musics()[indexOfCurrentMusic]);
  }
};
audio.onended = handeNextMusic;
nextButton.addEventListener("click", handeNextMusic);
prevButton.addEventListener("click", () => {
  if (indexOfCurrentMusic === 0) {
    indexOfCurrentMusic = musics().length - 1;
    updateCurrentMusicUI(musics()[indexOfCurrentMusic]);
  } else {
    indexOfCurrentMusic--;
    updateCurrentMusicUI(musics()[indexOfCurrentMusic]);
  }
});
function setCurrentMusic() {
  [...musicsContainer.children].forEach((songElement) => {
    songElement.addEventListener("click", () => {
      indexOfCurrentMusic = musics().findIndex(
        (item) => item.id === parseInt(songElement.dataset.id)
      );
      const currentMusic = musics().filter(
        (item) => item.id === parseInt(songElement.dataset.id)
      )[0];
      updateCurrentMusicUI(currentMusic);
      audioPlayer();
    });
  });
}
export default setCurrentMusic;
