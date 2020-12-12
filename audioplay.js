var i, butoane = document.querySelectorAll(".btn").length;
var song = 0;
var maxSongs = 4;
var cantecel = new Audio("Andra - Vis de iarna.mp3");
var hrtext = document.getElementById("songTitle");
hrtext.innerHTML="Now playing: Andra - Vis de iarna";
var saveTime=0;

for (i = 0; i < butoane; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", clickhandle);
  document.querySelectorAll(".btn")[i].addEventListener("mouseenter", entering);
  document.querySelectorAll(".btn")[i].addEventListener("mouseleave", leaving);
}

function clickhandle() {
  keyAnimation(this.innerHTML);
  if(this.innerHTML==='Next') {
    if(song===maxSongs)
      song=0;
    else
      song++;
    cantecel.pause();
    saveTime=0;
    playSong(song);
    if(document.querySelectorAll(".btn")[1].classList.contains("Pause")) {
      document.querySelectorAll(".btn")[1].innerHTML='Play';
      document.querySelectorAll(".btn")[1].classList.remove("Pause");
      document.querySelectorAll(".btn")[1].classList.add("Play");
    }
  }
  else if(this.innerHTML==='Previous') {
    if(song===0)
      song=maxSongs;
    else
      song--;
    cantecel.pause();
    saveTime=0;
    playSong(song);
    if(document.querySelectorAll(".btn")[1].classList.contains("Pause")) {
      document.querySelectorAll(".btn")[1].innerHTML='Play';
      document.querySelectorAll(".btn")[1].classList.remove("Pause");
      document.querySelectorAll(".btn")[1].classList.add("Play");
    }
  }
  else if(this.innerHTML==='Play') {
    playSong(song);
    cantecel.play();
    this.innerHTML='Pause';
    this.classList.remove("Play");
    this.classList.add("Pause");
  }
  else if(this.innerHTML==='Pause') {
    console.log(song);
    saveTime = cantecel.currentTime;
        console.log(saveTime);
    cantecel.pause();
        console.log(cantecel);
    this.innerHTML='Play';
    this.classList.remove("Pause");
    this.classList.add("Play");
  }
}

function entering() {
  keyAnimEnter(this.innerHTML);
}
function leaving() {
  keyAnimLeave(this.innerHTML);
}

function keyAnimation(keyAnim)
{
    var keyActive = document.querySelector("."+keyAnim);
    keyActive.classList.add("pressed");
    setTimeout(function(){
      keyActive.classList.remove("pressed");
    }, 100);
}

function keyAnimEnter(keyAnim)
{
    var keyActive = document.querySelector("."+keyAnim);
    keyActive.classList.add("acopera");
}

function keyAnimLeave(keyAnim)
{
    var keyActive = document.querySelector("."+keyAnim);
      keyActive.classList.remove("acopera");
}

function playSong(song) {
  switch (song) {
    case 0:
      cantecel = new Audio("Andra - Vis de iarna.mp3");
      hrtext.innerHTML="Now playing: Andra - Vis de iarna";
      cantecel.currentTime=saveTime;
      break;
    case 1:
      cantecel = new Audio("Cascada - Last Christmas.mp3");
      hrtext.innerHTML="Now playing: Cascada - Last Christmas";
      cantecel.currentTime=saveTime;
      break;
    case 2:
      cantecel = new Audio("Libera - Carol of the Bells.mp3");
      hrtext.innerHTML="Now playing: Libera - Carol of the Bells";
      cantecel.currentTime=saveTime;
      break;
    case 3:
      cantecel = new Audio("Mariah Carey - All I Want for Christmas Is You.mp3");
      hrtext.innerHTML="Now playing: Mariah Carey - All I Want for Christmas Is You";
      cantecel.currentTime=saveTime;
      break;
    case 4:
      cantecel = new Audio("Nicola - Iarna.mp3");
      hrtext.innerHTML="Now playing: Nicola - Iarna.mp3";
      cantecel.currentTime=saveTime;
      break;
    default:
      console.log(this);
  }
}
