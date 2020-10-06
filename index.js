window.addEventListener('load', ()=>{

const sounds = document.querySelectorAll('.sounds');
const pads = document.querySelectorAll('.pads div');
const visual = document.querySelector('.visual');
const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6860d3",
    "#47aae4"
];

//Lets get going with the sound here
pads.forEach((pad, index) =>{
    pad.addEventListener('click', function(){
        sounds[index].currenTime = 0;
        sounds[index].play();

        createBubbles(index);
    });
});

//Creating bubbles
const createBubbles = index => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener('animationend', function() {
        visual.removeChild(this);
    });
};

});