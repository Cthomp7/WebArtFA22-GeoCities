// https://github.com/Cthomp7/WebArtFA22-GeoCities/blob/main/assets/Spr_2g_103_s.webp

let posX = 0, posY = 0;
let step = 20;

function init(){
player = document.getElementById('player');
posX = 830;
posY = player.style.top;

footprint = document.getElementById('footprint');
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        moveLeft();
    }
    else if(event.keyCode == 39) {
        moveRight();
    }
    else if (event.keyCode == 38) {
        moveUp();
    }
    else if (event.keyCode == 40) {
        moveDown();
    }
});

function moveRight(){
    player.style.left = (posX + step) + 'px';
     posX += step;
}

function moveLeft(){
    player.style.left = (posX - step) + 'px';
     posX -= step;
}

function moveUp(){
    player.style.top = (posY - step) + 'px';
     posY -= step;
}

function moveDown(){
    player.style.top = (posY + step) + 'px';
     posY += step;
}

function footprintPressed() {
    //idk why I am being this ambitious
}

window.onload = function() {init();};