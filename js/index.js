const play = document.getElementById('play');
const music = document.querySelector('audio');
const art = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const container_color = document.getElementById('con');
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
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    container_color.style.background = "linear-gradient(to right top, #181a21, #38264c, #791c5f, #bc004c, #e50610"; 
                 },3000);
               container_color.style.background = "linear-gradient(to right top, #0032e5, #382ad2, #4a23c0, #531dae, #58189d"; 
            },3000);
            container_color.style.background = "linear-gradient(to right top, #4931be, #a003a7, #d10087, #ec0064, #f64444";
        },3000);
        container_color.style.background = "linear-gradient(to right top, #a3e53b, #00d68b, #00b9e2, #0092ff, #1254eb";
    }, 3000);
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
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    container_color.style.background = "linear-gradient(to right top, #181a21, #38264c, #791c5f, #bc004c, #e50610"; 
                 },3000);
               container_color.style.background = "linear-gradient(to right top, #0032e5, #382ad2, #4a23c0, #531dae, #58189d"; 
            },3000);
            container_color.style.background = "linear-gradient(to right top, #4931be, #a003a7, #d10087, #ec0064, #f64444";
        },3000);
        container_color.style.background = "linear-gradient(to right top, #a3e53b, #00d68b, #00b9e2, #0092ff, #1254eb";
    }, 3000);
}

const playPrev=()=>{
    songIndex = (songIndex-1)%songs.length;
    songQueue(songs[songIndex]);
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    container_color.style.background = "linear-gradient(to right top, #181a21, #38264c, #791c5f, #bc004c, #e50610"; 
                 },3000);
               container_color.style.background = "linear-gradient(to right top, #0032e5, #382ad2, #4a23c0, #531dae, #58189d"; 
            },3000);
            container_color.style.background = "linear-gradient(to right top, #4931be, #a003a7, #d10087, #ec0064, #f64444";
        },3000);
        container_color.style.background = "linear-gradient(to right top, #a3e53b, #00d68b, #00b9e2, #0092ff, #1254eb";
    }, 3000);
}
prev.addEventListener('click', playPrev);
next.addEventListener('click',playNext);

