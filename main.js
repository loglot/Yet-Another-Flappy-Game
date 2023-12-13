const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");
const originalWidth = canvas.width;
const originalHeight = canvas.height;
var scaleX = 0;
var scaleY = 0;

var x = 50
var y = 50
var velX = 0
var velY = 0

Input()
while(true){
    x += velX
    y += velY
    velX = velX *.95
    velY = velY *.99
    velY += .5
    draw()
    resizeCanvasForWindowSize()
    await sleep(1000/60)
}

function draw() {
    ctx.fillStyle = "#a7c7d8";
    ctx.rect(0, 0, 10000000, 10000000) 
    ctx.fill()

    ctx.fillStyle = "#000";

    ctx.beginPath();
    ctx.arc(x,y, 100, 100, 1.8 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));

}


function Input() {
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
        if (code == "ArrowRight") {
            velX += 20
        }
        if (code == "ArrowLeft") {
            velX -= 20
        }        
        if (code == "ArrowUp") {
            velY -= 20
        }        
        if (code == "ArrowDown") {
            velY += 20
        }
      }, false);
}

function resizeCanvasForWindowSize() {

    var currentWidth = canvas.width;
    var currentHeight = canvas.height;
  
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
  
    var desiredWidth = windowWidth;
    var aspectRatio = originalWidth / originalHeight;
    var desiredHeight = desiredWidth / aspectRatio;
    canvas.width = desiredWidth;
    canvas.height = desiredHeight;
    scaleX = (desiredWidth / originalWidth);
    scaleY = (desiredHeight / originalHeight);
    ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)
    
    currentWidth = canvas.width;
    currentHeight = canvas.height;
    
    if (currentHeight >= windowHeight) {
      desiredHeight = windowHeight;
      aspectRatio = originalWidth / originalHeight;
      desiredWidth = desiredHeight * aspectRatio;
      canvas.width = desiredWidth;
      canvas.height = desiredHeight;
      scaleX = (desiredWidth / originalWidth);
      scaleY = (desiredHeight / originalHeight);
      ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)
    
    }
}