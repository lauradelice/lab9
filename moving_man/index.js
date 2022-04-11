let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let img = new Image ();
img.src = "./image/Preview-Green-Cap-Character-16x18.png"

let scale = 2;
const characterWidth = 111;
const characterHeight = 125;
const width = 16;
const height = 18;

const scaleWidth = width * scale;
const scaleHeight = height * scale;

const cycleLoop = [0,1,0,2]
let currentIndexFrame = 0;
let frameCounter = 0;
let direction = 0;

img.onload = ()=>{

    init();
   // drawImage(0,0,0,0);
   // drawImage(1,0,scaleWidth,0)
   // drawImage(2,0,scaleWidth*2,0)
   // drawImage(0,0,scaleWidth3,0)
}

function init () {
    window.requestAnimationFrame(step);
}

function drawImage(frameX, frameY,canvasX, canvasY){
    ctx.drawImage(img,frameX*characterWidth, frameY*characterHeight, characterWidth, characterHeight, canvasX, canvasY, scaleHeight, scaleWidth)
}

function step() {

    frameCounter++;
    if (frameCounter <15) {
        window.requestAnimationFrame(step);
        return
    }

    frameCounter = 0;
    ctx.clearRect (0,0, canvas.width, canvas.height);
    drawImage(cycleLoop[currentIndexFrame], direction,0,0);
    currentIndexFrame++
    if (currentIndexFrame >=4) {
        currentIndexFrame = 0;
    }
    window.requestAnimationFrame(step)
}






// function init() {

//     ctx.drawImage(img, characterWidth *  0, 0, characterWidth, characterHeight,0,0,scaleWidth,scaleHeight);
//     ctx.drawImage(img, characterWidth *  1, 0, characterWidth, characterHeight, scaleWidth * 1,0,scaleWidth,scaleHeight);
//     ctx.drawImage(img, characterWidth *  2, 0, characterWidth, characterHeight, scaleWidth * 2,0,scaleWidth,scaleHeight);   
// }