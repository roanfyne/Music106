const songs = [
    "01. Lemon lime.mp3",
    "02. Chlorophyll.mp3",
    "03. Inflorescence Hotmix.mp3",
    "04. Stargazer.mp3"
];

const songsDropdown = document.getElementById('songsDropdown');
const audioPlayer = document.getElementById('audioPlayer');

let currentIndex = 0;

songsDropdown.addEventListener('change', (event) => {
    const selectedSong = event.target.value;
    currentIndex = songs.indexOf(selectedSong);
    playSong(selectedSong);
});

audioPlayer.addEventListener('ended', () => {
    currentIndex++;
    if (currentIndex < songs.length) {
        playSong(songs[currentIndex]);
    } else {
        audioPlayer.src = '';
    }
});

function playSong(song) {
    audioPlayer.src = `Vs Imposter v5/${song}`;
    audioPlayer.play();
}

// Initial song load
if (songs.length > 0) {
    playSong(songs[0]);
}

// Initial song load
if (songs.length > 0) {
    playSong(songs[0]);
}
