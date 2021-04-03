import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'

//Selecciona video y button mediante querySelector (Son los unicos elementos con estas etiquetas por el momento)
// documentación: MDN HTMLMediaElement

const video = document.querySelector("video");
const buttonPlay = document.querySelector("button#play");
const buttonMute = document.querySelector("button#mute");

const player = new MediaPlayer({el: video, plugins: [
    new AutoPlay()
]});

buttonPlay.onclick = ()=> {
    (player.paused())
    ? player.play()
    : player.pause();
};

buttonMute.onclick = ()=> {
    (player.muted())
    ? player.unmute()
    : player.mute();
};