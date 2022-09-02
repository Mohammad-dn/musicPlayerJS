import cleanTime from "../utils/cleanTime.js";
import intervalMusicPlayed from "../component/setIntervalMusicProgres.js";
const musicTimeRange = document.getElementById("music-time-range");
const audio = document.querySelector("#audio");
const musicProgressBar = document.querySelector(".music-progress-bar");
const currentTime = document.querySelector(".current-time");
const fullTime = document.querySelector(".full-time");

//*//*/////////
function musicProgressBaaar() {
  musicTimeRange.addEventListener("change", (e) => {
    audio.currentTime = e.target.value;
    const musicProgresBarWidth = (audio.currentTime / audio.duration) * 100;
    musicProgressBar.style.width = musicProgresBarWidth + "%";
  });
  fullTime.innerHTML = cleanTime(audio.duration);
  musicTimeRange.max = audio.duration;
  intervalMusicPlayed()
}
export default musicProgressBaaar;
