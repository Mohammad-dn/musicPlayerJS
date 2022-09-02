import audioPlayer from "../utils/audioPlay.js";
const currentMusicCover = document.querySelector(".current-music-cover");
const currentMusicSinger = document.querySelector(".current-music-singer");
const currentMusicTitle = document.querySelector(".current-music-title");
const audio = document.querySelector("#audio");



function updateCurrentMusicUI(currentMusic) {
  currentMusicCover.style.backgroundImage = `url(${currentMusic.cover})`;
  currentMusicSinger.innerHTML = currentMusic.artist;
  currentMusicTitle.innerHTML = currentMusic.name;
  audio.src = currentMusic.audio;
  audioPlayer();
}
export default updateCurrentMusicUI;
