const audio = document.querySelector("#audio");
const coverPlayButton = document.querySelector(".cover-play-button");

function handlePlayPouseMusic(audio) {
  const span = document.createElement("span");
  span.innerHTML = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="32px" style="enable-background:new 0 0 24 32;" version="1.1" viewBox="0 0 24 32" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_1"/><g id="play"><polygon points="0,0 24,16 0,32  " style="fill:#4E4E50;"/></g></svg>`;
  let show = true;
  span.onclick = function (e) {
    if (show) {
      audio.pause();
      span.innerHTML = ` <svg id="play-icon" width="70" height="70" viewBox="0 0 183 170" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M132.684 92.3876L60.0932 131.188C53.9327 134.478 46.0269 130.495 46.0269 123.863V46.262C46.0269 39.641 53.9213 35.6475 60.0932 38.9474L132.684 77.748C134.085 78.485 135.25 79.5503 136.06 80.8358C136.87 82.1213 137.297 83.5813 137.297 85.0678C137.297 86.5543 136.87 88.0144 136.06 89.2999C135.25 90.5854 134.085 91.6506 132.684 92.3876Z"
        fill="#F2F2F2" />
    </svg>`;
      show = false;
    } else {
      audio.play();
      span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#f2f2f2" class="bi bi-pause" viewBox="0 0 16 16">
      <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
    </svg>`;
      show = true;
    }
  };
  coverPlayButton.innerHTML = "";
  coverPlayButton.appendChild(span);
}

export default handlePlayPouseMusic;
