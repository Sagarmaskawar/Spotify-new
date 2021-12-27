console.log("welcome to spotify");

let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let mplay = document.getElementById('mplay');
let bar= document.getElementById('bar');
let gif=document.getElementById('gif');
let msong=document.getElementById('msong');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs=[
               {songName: "Tak-Tak-Tainu", filePath: "/songs/Tak.mp3", coverPath: "/insider/images/taktak.jpg"},
               {songName: "Hosana", filePath: "/songs/hosana.mp3", coverPath: "/insider/images/hosanna.jpg"},
               {songName: "Ranjha", filePath: "/songs/Ranjha.mp3", coverPath: "/insider/images/Ranjha.jpg"},
               {songName: "Tum-Hi-Ho", filePath: "/songs/Tum.mp3", coverPath: "/insider/images/tumhiho.jpg"},
               {songName: "Butta-Bomma", filePath: "/songs/ButtaBomma.mp3", coverPath: "/insider/images/Butta-Bomma.jpg"}
         ]

songItems.forEach((element,i)=>{
      element.getElementsByTagName("img")[0].src=songs[i].coverPath;
      element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

mplay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        mplay.classList.remove('fa-play-circle');
        mplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else{
        audioElement.pause();
        mplay.classList.remove('fa-pause-circle');
        mplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate',()=>{
//console.log('timeupdate')

progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
//console.log(progress);
bar.value=progress;
})

bar.addEventListener('change',()=>{
    audioElement.currentTime = bar.value* audioElement.duration/100;
})

const playall = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
        })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        playall();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `songs/${songIndex+1}.mp3`;
        msong.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        mplay.classList.remove('fa-play-cirle');
        mplay.classList.add('fa-pause-circle');
    })
})
 
document.getElementById('next').addEventListener('click', (e)=>{
    if(songIndex>=4){
        songIndex=0
    }
    else{
    songIndex +=1;
   }
   
   audioElement.src= `songs/${songIndex+1}.mp3`;
   msong.innerText = songs[songIndex].songName;
   audioElement.currentTime=0;
   audioElement.play();
   gif.style.opacity=1;
   mplay.classList.remove('fa-pause-cirle');
   mplay.classList.add('fa-play-circle');

})

document.getElementById('previous').addEventListener('click', (e)=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
    songIndex -=1;
   }
   
   audioElement.src= `songs/${songIndex+1}.mp3`;
   msong.innerText = songs[songIndex].songName;
   audioElement.currentTime=0;
   audioElement.play();
   gif.style.opacity=1;
   mplay.classList.remove('fa-pause-cirle');
   mplay.classList.add('fa-play-circle');

})

