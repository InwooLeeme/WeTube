const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playButton = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");
const fullScreenBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playButton.innerHTML = `<i class="fas fa-pause"></i>`;
  } else {
    videoPlayer.pause();
    playButton.innerHTML = `<i class="fas fa-play"></i>`;
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  }
}

function exitFullScreen() {
  fullScreenBtn.innerHTML = `<i class="fas fa-expand"></i>`;
  fullScreenBtn.addEventListener("click", goFullScreen);
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen(); // webkit은 구글크롬에서 쓰는 엔진
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function goFullScreen() {
  if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen();
  } else if (videoContainer.mozRequestFullScreen) {
    videoContainer.mozRequestFullScreen();
  } else if (videoContainer.webkitRequestFullscreen) {
    videoContainer.webkitRequestFullscreen();
  } else if (videoContainer.msRequestFullscreen) {
    videoContainer.msRequestFullscreen();
  }
  fullScreenBtn.innerHTML = `<i class="fas fa-compress-arrows-alt"></i>`;
  fullScreenBtn.removeEventListener("click", goFullScreen);
  fullScreenBtn.addEventListener("click", exitFullScreen);
}

const formateDate = (seconds) => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (totalSeconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }
  return `${hours}:${minutes}:${totalSeconds}`;
};

function setTotalTime() {
  const totalTimeString = formateDate(videoPlayer.duration);
  totalTime.innerHTML = totalTimeString;
  setInterval(getCurrentTime, 1000);
}

function getCurrentTime() {
  currentTime.innerHTML = formateDate(videoPlayer.currentTime);
}

function init() {
  playButton.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  fullScreenBtn.addEventListener("click", goFullScreen);
  videoPlayer.addEventListener("loadedmetadata", setTotalTime);
}

if (videoContainer) {
  init();
}

/* console.log(videoContainer); // 로그 값도 찍히지 않아서 뭐가 문제인지 모르겠습니다

playButton.addEventListener("click", handlePlayClick); // 오류도 생기지 않아요
 */
// console.log("this");
