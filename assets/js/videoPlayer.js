const videoContainer = document.getElementById("jsVideoPlayer"),
  videoPlayer = document.querySelector("#jsVideoPlayer video"),
  playButton = document.getElementById("jsPlayButton"),
  volumeBtn = document.getElementById("jsVolumeBtn");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playButton.innerHTML = `<i class="fas fa-pause"></i>`;
  } else {
    videoPlayer.pause();
    playButton.innerHTML = `<i class="fas fa-play"></i>`;
  }
}

function handleVolumnClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  }
}

function init() {
  playButton.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumnClick);
}

if (videoContainer) {
  init();
}

//videoContainer.addEventListener("click", () => false);
