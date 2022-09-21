// https://github.com/Cthomp7/WebArtFA22-GeoCities/blob/main/assets/Spr_2g_103_s.webp

let player, healthbar;
let posX = 950, posY = 0;
let step = 20;
let health = 50;

function init(){
player = document.getElementById('player');
healthbar = document.getElementById('player-health-bar');
// asteroids = document.getElementById('asteroids');

asteroidsSpawn();
}

setInterval(function(){
    current += .158;
    update();
},1000);

function update() {
    let counter;
    counter++;
    console.log(counter);
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
        updateLocation();
        checkDistance();
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

function updateLocation() {
    healthbar.style.left = posX + 'px';
    healthbar.style.top = (posY - 10) + 'px';
}

function checkDistance (){
    for (var i = 0; i < asteroids.length; i++){
        var a = (posX + 10) - asteroids[i].positionX;
        var b = (posY + 10) - asteroids[i].positionY; 
        var c = Math.sqrt( a*a + b*b );
        console.log(c);

        //NEED TO PUT A BUFFER ON PLAYER POSITION TO CENTER!!!!!
        if (c <= 20) {
            health -= 5;
            updateHealthBarColor();
            healthbar.style.width = health + 'px';
        }
    }
}

function died () {
    //CHANGE IMAGE WHEN DIED
}

let asteroids = [];

function asteroidsSpawn() {
    for (var i = 0; i < 10; i++){
        img = document.createElement("img");
        img.src = "assets/Bag_Leaf_Stone_Sprite.webp";
        img.style.position = "absolute";
        var div = document.getElementById('asteroids-div');
        img.id = "img" + i;
        div.appendChild(img);
        var randomX = Math.floor(Math.random() * 800);
        var randomY = Math.floor(Math.random() * 600);
        document.getElementById('img' + (i)).style.left = randomX + "px";
        document.getElementById('img' + (i)).style.top = randomY + "px";

        asteroid = new Asteroid (randomX, randomY);
        asteroids.push(asteroid);
    }
}

class Asteroid 
{
    constructor(asteroidPosX, asteroidPosY) {
        this.positionX = asteroidPosX;
        this.positionY = asteroidPosY;
    }
}

function updateHealthBarColor() {
    if (health <= 40 && health >= 39) {
        healthbar.style.backgroundColor = "yellow";
    }
    else if (health <= 30 && health >= 29) {
        healthbar.style.backgroundColor = "orange";
    }
    else if (health <= 20 && health >= 19) {
        healthbar.style.backgroundColor = "orangered";
    }
    else if (health <= 10) {
        healthbar.style.backgroundColor = "tomato";
    }
}

function footprintPressed() {
    //idk why I am being this ambitious
}

window.onload = function() {init();};