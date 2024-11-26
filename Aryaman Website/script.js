// Add event listeners to all buttons
document.querySelectorAll('.sound-button').forEach((button) => {
    button.addEventListener('click', () => {
      const sound = button.dataset.sound; // Get the sound from data-sound attribute
      playSound(sound);
    });
  });
  
  // Function to play the sound
  function playSound(soundName) {
    const audio = new Audio(`sounds/${soundName}.mp3`); // Assumes sounds are in the 'sounds' folder
    audio.play();
  }
  