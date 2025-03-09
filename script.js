const songs = [
    "02 You're So Sussy (Menu Theme).mp3",
    "03 Sussus Moogus.mp3",
    "04 Sabotage.mp3",
    "05 Meltdown.mp3",
    "06 Sussus Toogus.mp3",
    "07 Lights Down.mp3",
    "08 Reactor.mp3",
    "09 Ejected.mp3",
    "10 Mando.mp3",
    "11 D_low.mp3",
    "12 Oversight.mp3",
    "13 Danger.mp3",
    "14 Double Kill.mp3",
    "15 Defeat.mp3",
    "16 Ashes.mp3",
    "17 Magmatic.mp3",
    "18 Boiling Point.mp3",
    "19 Delusion.mp3",
    "20 Blackout.mp3",
    "21 Neurotic.mp3",
    "22 Heartbeat.mp3",
    "23 Pinkwave.mp3",
    "24 Pretender.mp3",
    "25 O2.mp3",
    "26 Voting Time.mp3",
    "27 Turbulence.mp3",
    "28 Victory (1).mp3",
    "29 Sussy Bussy.mp3",
    "31 Rivals.mp3",
    "32 Chewmate.mp3",
    "33 Christmas.mp3",
    "34 Spookpostor.mp3",
    "35 Titular.mp3",
    "36 Greatest Plan.mp3",
    "37 Reinforcements.mp3",
    "38 Armed.mp3",
    "39 Alpha Moogus.mp3",
    "40 Actin_ Sus.mp3",
    "41 Sauces Moogus.mp3",
    "42 Room Code.mp3",
    "43 Tomongus Tuesday.mp3",
    "44 Ow.mp3",
    "45 Who (1).mp3",
    "46 Insane Streamer.mp3",
    "47 Sussus Nuzzus.mp3",
    "48 IDK (1).mp3",
    "49 Esculent.mp3",
    "51 Drippypop.mp3",
    "52 Crewicide.mp3",
    "53 Monotone Attack.mp3",
    "55 Chippin_.mp3",
    "56 Chipping.mp3",
    "57 Torture.mp3",
    "58 Identity Crisis.mp3",
    "60 Finale.mp3",
    "61 Sussus Endus.mp3"
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
    audioPlayer.src = `Vs Impostor/${song}`;
    audioPlayer.play();
}

// Initial song load
if (songs.length > 0) {
    playSong(songs[0]);
}
