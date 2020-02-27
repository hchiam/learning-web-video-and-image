if (window.CHARLIE) {
  window.CHARLIE.setup(document.getElementById('video'));
}

/** to be used by event listener */
function playVideo() {
  const video = document.getElementById('video');
  video.play();
}

/** to be used by event listener */
function pauseVideo() {
  const video = document.getElementById('video');
  video.pause();
}

document.getElementById('play-video').addEventListener('click', () => {
  playVideo();
});

document.getElementById('pause-video').addEventListener('click', () => {
  pauseVideo();
});
