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
        name: "vikram-bgm",
        title: "Vikram - Title- Track",
        artist:"",
    }
]