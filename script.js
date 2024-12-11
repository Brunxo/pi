// script.js
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const audio = new Audio('pi.mp3'); // Ruta relativa a la carpeta actual

    playButton.addEventListener('click', () => {
        audio.play();
    });
});