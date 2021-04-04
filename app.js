const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');

  //sounds
  const sounds = document.querySelectorAll('.sound-picker button');
  //Time display
  const timeDisplay = document.querySelector('.time-display');
  const timeSelect = document.querySelectorAll('.time-select button');
  //get the length of the outline
  const outlineLength = outline.getTotalLength();
  //Duration
  let fakeDuration = 600;

  //select sounds
  timeSelect.forEach(option => {
    option.addEventListener('click', function() {
      fakeDuration = this.getAttribute('data-time');
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
    });
  });

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  //pick different sounds
  sounds.forEach(sound => {
    sound.addEventListener('click', function() {
      song.src = this.getAttribute('data-sound');
      video.src = this.getAttribute('data-video');
      checkPlaying(song);
    });
  });

  //play sound
  play.addEventListener('click', () => {
    checkPlaying(song);
  });


  //creat a function specific to stop and play the sound
  const checkPlaying = function(song) {
    if(song.paused) {
      song.play();
      video.play();
      play.src = './svg/pause.svg';
    }
    else {
      song.pause();
      video.pause();
      play.src = './svg/play.svg';
    }
  };

  //We can animate the circle
  song.ontimeupdate = function() {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    //animate the circle
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    //animate the text
    timeDisplay.textContent = `${minutes}:${seconds}`

    //When time expires stop the song and change the button img
    if(currentTime >= fakeDuration) {
      song.pause();
      song.currentTime = 0;
      play.src = './svg/play.svg';
      videp.pause;
    };
  };

  //以下が自分で改良するために書いたコード
  //時間のボタンをクリックすると音楽が停止
  timeSelect.forEach(option => {
    option.addEventListener('click', function() {
      song.pause();
      play.src = './svg/play.svg';
    });
  });
};


app();
