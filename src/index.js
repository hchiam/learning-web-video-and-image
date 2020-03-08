if (window.CHARLIE) {
  window.CHARLIE.setup(document.getElementById('video'));
}

const video = document.getElementById('video');
const skipInterval = document.getElementById('seconds-to-skip');

document.getElementById('play-video').addEventListener('click', () => {
  video.play();
});

document.getElementById('pause-video').addEventListener('click', () => {
  video.pause();
});

document.getElementById('skip-to-middle').addEventListener('click', () => {
  video.currentTime = video.duration / 2;
});

document.getElementById('skip-forwards').addEventListener('click', () => {
  video.currentTime = video.currentTime + parseInt(skipInterval.value);
});

document.getElementById('skip-backwards').addEventListener('click', () => {
  video.currentTime = video.currentTime - parseInt(skipInterval.value);
});
