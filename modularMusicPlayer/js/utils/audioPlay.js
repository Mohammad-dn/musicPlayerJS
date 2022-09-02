import handlePlayPouseMusic from "../component/handelPlayPouseMusic.js";
import musicProgressBaaar from "../component/musicProgress.js";
const audio = document.querySelector("#audio");
function audioPlayer() {
  audio.play().then(() => {
    musicProgressBaaar(audio);
    handlePlayPouseMusic(audio);
  });
}


export default audioPlayer;
