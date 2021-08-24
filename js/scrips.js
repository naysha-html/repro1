const image = document.getElementById("image")
const play_btn = document.getElementById("play")
const audio = document.getElementById("audio")
const stop_btn = document.getElementById("stop")
const pause_btn = document.getElementById("pause")
play_btn.addEventListener('click',()=>{
    audio.play();
    image.style.animationPlayState = "running"
})
pause_btn.addEventListener('click',()=>{
    audio.pause();
    image.style.animationPlayState = "paused"
})
stop_btn.addEventListener('click',()=>{
    audio.load();
    image.style.animationPlayState = "restart"
})