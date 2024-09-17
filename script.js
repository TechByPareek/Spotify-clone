console.log("Welcome to Spotify");
//intialize the variables
let songIndex=0;
let audioElement = new Audio('song/1.mp3');
let masterplay = document.getElementById('masterplay');
let range = document.getElementById('range');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songname: "ik vaari aa" , filepath:"song/1.mp3"  ,  coverpath:"covers/1.jpg" },
    {songname: "Tum hi ho" , filepath:"song/2.mp3"  ,  coverpath:"covers/2.jpg" },
    {songname: "Meri Ashiqui" , filepath:"song/3.mp3"  ,  coverpath:"covers/3.jpg" },
    {songname: "Humsafar" , filepath:"song/4.mp3"  ,  coverpath:"covers/4.webp"},
    {songname: "O Maahi" , filepath:"song/5.mp3"   , coverpath:"covers/5.jpg" },
    {songname: "Satranga" , filepath:"song/6.mp3" ,   coverpath:"covers/6.jpg" },
    {songname: "Apna bna le" , filepath:"song/7.mp3"  ,  coverpath:"covers/7.jpg" },
]
songitems.forEach((element ,i)=>{
    
       element.getElementsByTagName("img")[0].src=songs[i].coverpath;
       
       element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})
// AudioElement.play();

//handle play/pause click
masterplay.addEventListener('click', ()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('bx-play-circle');
        masterplay.classList.add('bx-pause-circle');
        gif.style.opacity=1;
     }
     else{
        audioElement.pause();
        masterplay.classList.remove('bx-pause-circle');
        masterplay.classList.add('bx-play-circle');
        gif.style.opacity=0;
     }
})


//listen to Events
audioElement.addEventListener('timeupdate',()=> {
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    range.value=progress;
})
range.addEventListener('change',()=>{
    audioElement.currentTime=(range.value*audioElement.duration)/100;
})
const  makeAllplays = ()=> {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('bx-pause-circle');
        element.classList.add('bx-play-circle');
    });
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            makeAllplays();
            songIndex=parseInt(e.target.id);
            e.target.classList.remove('bx-play-circle');
            e.target.classList.add('bx-pause-circle');
            audioElement.src=`song/${songIndex+1}.mp3`;
            mastersongname.innerText= songs[songIndex].songname;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterplay.classList.remove('bx-play-circle');
            masterplay.classList.add('bx-pause-circle');

        });
});
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>8){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    mastersongname.innerText= songs[songIndex].songname;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterplay.classList.remove('bx-play-circle');
            masterplay.classList.add('bx-pause-circle');
         
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    mastersongname.innerText= songs[songIndex].songname;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterplay.classList.remove('bx-play-circle');
            masterplay.classList.add('bx-pause-circle');
         
})
