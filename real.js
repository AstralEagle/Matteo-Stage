let video1 = document.getElementById('video1');
let video2 = document.getElementById('video2');
let video3 = document.getElementById('video3');

video1.addEventListener('mouseover', (e) => {
    video1.play();
},false);
video1.addEventListener('mouseout', (e) => {
    video1.pause();
    video1.currentTime = 0;
});

video2.addEventListener('mouseover', (e) => {
    video2.play();
},false);
video2.addEventListener('mouseout', (e) => {
    video2.pause();
    video2.currentTime = 0;
});

video3.addEventListener('mouseover', (e) => {
    video3.play();
}, false);
video3.addEventListener('mouseout', (e) => {
    video3.pause();
    video3.currentTime = 0;
})