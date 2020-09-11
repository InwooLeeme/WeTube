const videoContainer = document.getElementById("jsVideoPlayer"),
  videoPlayer = document.querySelector("#jsVideoPlayer video"),
  playButton = document.getElementById("jsPlayButton");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
}

function init() {
  playButton.addEventListener("click", handlePlayClick);
}

if (videoContainer) {
  init();
}

//videoContainer.addEventListener("click", () => false);
