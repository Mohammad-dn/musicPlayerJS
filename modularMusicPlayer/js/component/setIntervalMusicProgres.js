import cleanTime from "../utils/cleanTime.js";

const currentTime = document.querySelector(".current-time");
const audio = document.querySelector("#audio");
const musicProgressBar = document.querySelector(".music-progress-bar");

function intervalMusicPlayed() {
  setInterval(() => {
    currentTime.innerHTML = cleanTime(audio.currentTime);
    const musicProgresBarWidth = (audio.currentTime / audio.duration) * 100;
    musicProgressBar.style.width = musicProgresBarWidth + "%";
  }, 1000);
}
export default intervalMusicPlayed;
