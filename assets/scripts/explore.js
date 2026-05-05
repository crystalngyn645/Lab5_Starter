// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const faceIcon = document.querySelector('#explore > img');

  const selectVoice = document.getElementById('voice-select');

  const textToSpeak = document.getElementById('text-to-speak');

  const talkButton = document.querySelector('button');

  let voices = []; 

  function populateVoiceList() {

    voices = window.speechSynthesis.getVoices();

    selectVoice.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) =>
      {

      const option = document.createElement('option');

      option.value = index;

      option.textContent = `${ voice.name } (${voice.lang})`;

      selectVoice.appendChild( option );
    });

  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) 
  {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  talkButton.addEventListener('click', () => 
  {
    const speech = new SpeechSynthesisUtterance( textToSpeak.value );

    speech.voice = voices[selectVoice.value];

    speech.onstart = () => 
    {
      faceIcon.src = 'assets/images/smiling-open.png';
    };

    speech.onend = () => 
    {
      faceIcon.src = 'assets/images/smiling.png';
    };

    window.speechSynthesis.speak(speech);

  });


}