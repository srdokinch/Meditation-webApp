const app = () => {
  const song = document.querySelector('song');
  const play = document.querySelector('play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');

  //sounds
  const sounds = document.querySelector('.sound-picker buttn');

  //Time display
  const timeDisplay = document.querySelector('.time-display');

  //get length of the outline
  const outlineLength = outline.getTotalLength();
  console.log(outlineLength);

  //Duaration,set as defalt is 600
  let fakeDuration = 600;
}

app();
