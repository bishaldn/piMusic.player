const play = document.getElementById('play');
const music = document.querySelector('audio');
const art = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let isPlaying = false;
const playMusic  = ()=>{
    isPlaying=true;
    music.play();
    art.classList.add('anime');
    play.classList.replace('fa-play','fa-pause');
}
const pauseMusic  = ()=>{
    isPlaying=false;
    music.pause();
    art.classList.remove('anime');
    play.classList.replace('fa-pause','fa-play');
}

play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
})
const songs = [
    {
        name : "rolex-bgm",
        title: "Rolex - Vikram",
        artist: "Anirudh Music",
    },
    {
        name: "vikram-title-track",
        title: "Vikram - Title- Track",
        artist:"Anirudh Music",
    }
]

const songQueue=(songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    art.src = "./album-art/"+songs.name+".jpg";
    music.src = "./music/"+songs.name+".mp3";

}
songIndex = 0;
const playNext=()=>{
    songIndex = (songIndex+1)%songs.length;
    songQueue(songs[songIndex]);
}

const playPrev=()=>{
    songIndex = (songIndex-1)%songs.length;
    songQueue(songs[songIndex]);
}
prev.addEventListener('click', playPrev);
next.addEventListener('click',playNext);