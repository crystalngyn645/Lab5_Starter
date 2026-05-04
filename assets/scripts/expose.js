// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const hornSelect = document.getElementById('horn-select');

  const hornImage = document.getElementById('expose-img');

  const volumeSlider = document.getElementById('volume');

  const volumeIcon = document.getElementById('volume-controls');

  const audio = document.getElementById('horn-sound');

  const playButton = document.querySelector('button');

  const jsConfetti = new JSConfetti();

  //DROPDOWN

  hornSelect.addEventListener('change', () => 
  {
    const value = hornSelect.value;

    hornImage.src = `./assets/images/${value}.svg`;

    audio.src = `./assets/audio/${value}.mp3`;
  
    });

  //VOLUME SLIDER

  volumeSlider.addEventListener('input', () => 
  {
    const value = Number(volumeSlider.value);

    audio.volume = value / 100;

    if (value === 0) 
    {
      volumeIcon.src = './assets/icons/volume-level-0.svg';
    } 
    else if (value < 33) 
    {
      volumeIcon.src = './assets/icons/volume-level-1.svg';
    }
    else if (value < 67) 
    {
      volumeIcon.src = './assets/icons/volume-level-2.svg';
    }
    else 
    {
      volumeIcon.src = './assets/icons/volume-level-3.svg';
    }
  });


  //PLAY BUTTON
 playButton.addEventListener('click', () => 
  {
    audio.play();

    
    if (hornSelect.value === 'party-horn') 
    {
      jsConfetti.addConfetti();
    }

  });


}